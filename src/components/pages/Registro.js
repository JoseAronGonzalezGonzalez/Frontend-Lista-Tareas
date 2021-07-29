import React, { Component } from "react";
import { loginServices, registroService } from "../../utils/api/services";
import { withRouter } from "react-router-dom";
import { setToken } from "../../utils/auth/Token";

import "../../css/Login/login.css";
import imagen2 from '../../asset/img/edit.png';
class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            nombre: "",
            apellidos: "",
            edad: "",
        };
    }

    handleOnInputChange = (key, event) => {
        this.setState({
            [key]: event.target.value,
        });
    };

    
    handleRegistro = async () => {
        const { nombre,apellidos,email, password,edad} = this.state;
        let registroResponse = await registroService(nombre,apellidos,email, password,edad);
        if (registroResponse?.success) {
            console.log("registro")
            let loginResponse = await loginServices(email, password);
            if (loginResponse?.success) {
                console.log("registro")
                setToken(loginResponse.data.data.token);
                this.props.history.push("/Tareas");
            }
        }
    };

    componentDidMount() {
        console.log("Login did mount");
    }
    handleLogin() {
        this.props.history.push("/")
    }

    render() {
        return (

            <div className="font">
                <div className="container">
                    <div className="medio">
                        
                        <div className="ajuste">
                            <h2 className="">Registro</h2>
                            <img src={imagen2}></img>

                        </div>

                        <div className="mb-1">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" aria-describedby="emailHelp" required onChange={(event) => this.handleOnInputChange("nombre", event)}/>
                            
                        </div>
                        <div className="mb-1">
                            <label className="form-label">apellidos</label>
                            <input type="text" className="form-control" aria-describedby="emailHelp" required onChange={(event) => this.handleOnInputChange("apellidos", event)}/>
                            
                        </div>
                        <div className="mb-1">
                            <label className="form-label">edad</label>
                            <input type="number" className="form-control" min="0" max="100" aria-describedby="emailHelp" required onChange={(event) => this.handleOnInputChange("edad", event)}/>
                            
                        </div>
                        <div className="mb-1">
                            <label className="form-label">email</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" required onChange={(event) => this.handleOnInputChange("email", event)}/>
                            
                        </div>
                        <div className="mb-3">
                            <label className="form-label">contraseña</label>
                            <input type="password" className="form-control" aria-describedby="emailHelp" required onChange={(event) => this.handleOnInputChange("password", event)}/>
                            
                        </div>
                        <button className="btn btn-info" onClick={() => this.handleRegistro()}>Registrar</button>
                        <span className="posicion1">¿tienes cuenta?, inicia sesión</span>
                        <button className="btn btn-outline-dark" onClick={() => this.handleLogin()}>Iniciar sesión</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default withRouter(Registro);