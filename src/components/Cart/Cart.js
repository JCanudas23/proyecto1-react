import "./Cart.css"
import { Link } from "react-router-dom"
import IconoCarrito from "../CartWidget/assets/cart-outline.svg"
import { useCart } from '../../context/CartProvider';

const Cart = () => {
  const { cartList, clear, removeItem, total } = useCart();

  return (
    <section className="container p-5">
      {cartList.length === 0 ? (
        <section className="py-5 my-5">
          <div className="container text-center" id="contenido-carrito">
            <h4 className="text-center text-black">
              ¡No hay productos en el carrito!
            </h4>
            <div className="">
              <img src={IconoCarrito} alt="IconoCarrito" className="my-4" />
            </div>
            <Link
              to="/products"
              className="text-center text-decoration-none fs-6 btn btn-primary border-0"
            >
              Volver a la tienda
            </Link>
          </div>
        </section>
      ) : (
        <section className="pb-5">
          <Link
            to="/products"
            className="mb-4 text-center text-decoration-none fs-6 btn btn-primary border-0"
          >
            Seguir comprando
          </Link>
          <h1 className="text-center">Carrito de compras</h1>
          <div className="table-responsive">
            <table className="table my-5">
              <thead>
                <tr>
                  <th className="text-start">Producto</th>
                  <th scope="col" className="text-center">
                    Descripción
                  </th>
                  <th scope="col" className="text-end">
                    Precio
                  </th>
                  <th scope="col" className="text-end">
                    Cantidad
                  </th>
                  <th scope="col" className="text-end">
                    Subtotal
                  </th>
                  <th scope="col" className="text-center">
                        <button className="btn btn-danger" onClick={clear}>
                            Vaciar carrito
                        </button>
                  </th>
            </tr>
              </thead>
              <tbody>
                {cartList.map(
                  ({ id, title, image, description, price, quantity }) => (
                    <tr key={id}>
                      <th scope="row">
                        <img
                          src={`/img/productos/${image}`}
                          alt={title}
                          width="100px"
                        />
                      </th>
                      <td className="text-center align-middle">
                        {description}
                      </td>
                      <td className="fw-bold text-end align-middle">
                        ${price}
                      </td>
                      <td className="fw-bold text-end align-middle">
                        {quantity} x ${price}
                      </td>
                      <td className="fw-bold text-end align-middle">
                        ${(quantity * price).toFixed(2)}
                      </td>
                      <td className="fw-bold text-center align-middle">
                        <button
                          className="btn-primary rounded-circle"
                          onClick={() => removeItem(id)}
                        >
                          <i className="bi bi-trash3-fill"></i>
                        </button>
                      </td>
                    </tr>
                  )
                )}
                <tr>
                  <th className="border-0">Saldo total:</th>
                  <th className="border-0"></th>
                  <th className="border-0"></th>
                  <th className="border-0"></th>
                  <th className="text-end border-0">${total}</th>
                  <th className="border-0"></th>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <Link
              to="/checkout"
              className="text-center text-decoration-none fs-6 btn btn-primary border-0">
              Checkout
            </Link>
          </div>
        </section>
      )}
    </section>
  );
};

export default Cart;