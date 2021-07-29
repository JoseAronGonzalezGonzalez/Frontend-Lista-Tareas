import React, { Component } from "react";
import { loginServices } from "../../utils/api/services";
import { withRouter } from "react-router-dom";
import { setToken } from "../../utils/auth/Token";
import "../../css/Login/login.css"
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleOnInputChange = (key, event) => {
    this.setState({
      [key]: event.target.value,
    });
  };

  handleLogin = async () => {
    const { email, password } = this.state;
    let loginResponse = await loginServices(email, password);
    if (loginResponse?.success) {
      setToken(loginResponse.data.data.token);
      this.props.history.push("/Tareas");
    }
  };

  componentDidMount() {
    console.log("Login did mount");
  }
  handleRegistro = () => {
    this.props.history.push("/registro")
  }

  render() {
    return (
      <div className="font">
        <div className="container">
          <div className="medio">
            <div className="">
              <h3 className="">Pagina de lista de tareas</h3>
              <h5 className=""> Iniciar Sesion </h5>
            </div>
            <div className="mb-3">
              <label className="form-label">Correo Electronico</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" required onChange={(event) => this.handleOnInputChange("email", event)}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input type="password" className="form-control" onChange={(event) => this.handleOnInputChange("password", event)}/>
            </div>
            
            <button className="btn btn-primary" onClick={this.handleLogin}>Iniciar sesión</button>
            <span className="posicion">¿No tienes cuenta?, registrate</span>
            <button className="" className="btn btn-primary" onClick={this.handleRegistro}>Resgistrar aquí</button>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(Login);
