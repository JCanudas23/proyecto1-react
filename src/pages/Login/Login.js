const Login = () => {

    return (
        <section className="py-5 my-5">
                <div className="container">
                            <div className="card p-4 w-50 mx-auto">
                                <h4 className="text-center mb-4">
                                    <i className="bi bi-key bg-beige rounded-circle"></i>Ingresar</h4>
                                    <form  id="form-registro">
                                        <div className="form-floating mb-3">
                                        <input type="text" className="form-control" name="name" id="name" placeholder="Juan Pérez" />
                                        <label htmlFor="nombre">Nombre<span className="text-danger">*</span></label>
                                      </div>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" />
                                            <label htmlFor="email-reg">Email<span className="text-danger">*</span></label>
                                          </div>
                                          <div className="form-floating mb-4">
                                            <input type="password" className="form-control" name="password" id="password" placeholder="contrasenia" />
                                            <label htmlFor="passReg">Contraseña<span className="text-danger">*</span></label>
                                        </div>
                                        <span id="mensaje-error" className="my-5 mensaje-error"></span>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary border-0">Iniciar sesión</button>
                                        </div>
                                        <span className="mensaje-error"></span>
                                    </form>
                            </div>
                </div>
        </section>
    )
}

export default Login;