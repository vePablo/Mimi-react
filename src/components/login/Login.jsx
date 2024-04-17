import ImagenLogin from "../../../public/img/login-bg.jpeg";
import './Login.css'

const Login = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 body mt-4">
            <div className="card-body body">
              <form>
                <h5>Bienvenido</h5>
                <div className="mt-4">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Coloca tu Email"
                  />
                  <div id="emailHelp" className="form-text">
                    Well never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Coloca tu Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-8 ">
            <figure>
              <img
                className="img-fluid img"
                src={ImagenLogin}
                alt="Imgagen de login"
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
