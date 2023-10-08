import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <h1 className="loader-text">Cargando...</h1>
      <div className="loader-spinner">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;