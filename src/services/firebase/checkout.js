import React, { useState } from "react";
import { useCart } from "../../context/CartProvider";
import { Timestamp, addDoc, getDocs, query, collection, where, writeBatch, documentId } from "firebase/firestore";
import { db } from "./firebaseconfig";
import { Link } from "react-router-dom";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const { cartList, total, clear } = useCart();

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        state: "generated",
        items: cartList,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);
      const outOfStock = [];

      const ids = cartList.map((prod) => prod.id);
      const productsRef = collection(db, "items");
      const productsAddedFromFirestore = await query(
        productsRef,
        where(documentId(), "in", ids)
      );

      const productsQuerySnapshot = await getDocs(productsAddedFromFirestore);

      productsQuerySnapshot.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cartList.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clear();
      } else {
        console.error("Hay productos que están fuera de stock");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="vh-70 d-flex justify-content-center align-items-center">
        <h1>Se está generando su orden...</h1>
      </div>
    );
  }

  if (orderId) {
    return (
      <div className="p-5 vh-70 d-flex flex-column align-items-center">
        <div className="card mx-auto" style={{ width: "50%" }}>
          <div className="card-header text-center bg-dark">
            <h2 className="beige">Orden de compra</h2>
          </div>
          <div className="card-body">
            <h3>
              El ID de su orden es: <span className="fw-bold">{orderId}</span>
            </h3>
          </div>
        </div>
        <div className="mt-5">
          <Link to="/" className="btn-primary text-decoration-none p-2">
            Volver a inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
