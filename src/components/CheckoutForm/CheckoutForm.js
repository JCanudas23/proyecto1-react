import { useEffect, useState } from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleConfirm = (event) => {
    event.preventDefault();

    if (email === confirmEmail) {
      const userData = {
        name,
        surname,
        phone,
        email,
      };
      onConfirm(userData);
    } else {
      console.error("Los emails no coinciden");
    }
  };

  const checkForm = () => {
    if (
      name !== "" &&
      surname !== "" &&
      phone !== "" &&
      email !== "" &&
      email === confirmEmail
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  useEffect(() => {
    checkForm();
  }, [name, surname, phone, email, confirmEmail]);

  return (
    <section className="checkout-form">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Checkout</h2>
        <div className="card p-4 w-50 mx-auto">
          <form onSubmit={handleConfirm}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder=""
                value={name}
                onChange={({ target }) => setName(target.value)}
                required
              />
              <label htmlFor="nombre">
                Nombre <span className="text-danger">*</span>
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="surname"
                placeholder=""
                value={surname}
                onChange={({ target }) => setSurname(target.value)}
                required
              />
              <label htmlFor="surname">
                Apellido <span className="text-danger">*</span>
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                required
              />
              <label htmlFor="email">
                Email <span className="text-danger">*</span>
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="confirmEmail"
                placeholder="Confirmar email"
                value={confirmEmail}
                onChange={({ target }) => setConfirmEmail(target.value)}
                required
              />
              <label htmlFor="confirmEmail">
                Confirmar Email <span className="text-danger">*</span>
              </label>
            </div>
            <div className="form-floating mb-4">
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder=""
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
                required
              />
              <label htmlFor="phone">
                Teléfono <span className="text-danger">*</span>
              </label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary border-0"
                disabled={!isFormValid}
              >
                Realizar compra
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
