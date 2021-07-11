import React, { Component } from "react";
import { loginServices, registroService } from "../../utils/api/services";
import { withRouter } from "react-router-dom";
import { setToken } from "../../utils/auth/Token";
// import axios from "axios";
import "../../css/Login/login.css"
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

            <div className="bg-gradient-to-r from-blue-500 via-blue-900 to-black w-screen h-screen  text-center content-center">
                <div className="Formulario font-mono inline-block w-1/3 mx-auto  space-y-3  border-4 mt-52 rounded-xl p-6">
                    <div className="w-full inline-flex bg-green-300 rounded-lg">
                        <h2 className=" underline text-xl rounded-l-lg w-1/2 p-auto bg-green-400">Registro</h2>
                        <button className="text-xl  text-white hover:undeline" onClick={() => this.handleLogin()}>Iniciar Sesion</button>

                    </div>
                    <input
                        className="w-full"
                        placeholder="email"
                        type="email"
                        required
                        onChange={(event) => this.handleOnInputChange("email", event)}
                    />
                    <input
                        className="w-full"
                        placeholder="Password"
                        type="password"
                        onChange={(event) => this.handleOnInputChange("password", event)}
                    />
                    <button className="bg-green-400 border-4 border-green-600 rounded-xl p-1 text-white" onClick={() => this.handleRegistro()}>Registrar</button>

                </div>
            </div>
        );
    }
}

export default withRouter(Registro);