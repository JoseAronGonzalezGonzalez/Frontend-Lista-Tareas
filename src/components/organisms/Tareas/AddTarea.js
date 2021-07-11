import React, { Component } from "react";
import axios from "axios";
import { getToken } from "../../../utils/auth/Token";



class AddTarea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: undefined,
            description: undefined,
            estatus: undefined,
            fecha: undefined,
        };
    }

    handleOnInputChange = (key, event) => {
        this.setState({
            [key]: event.target.value,
        });
    };
    componentDidMount(){
        console.log("mount");
    }
    handleAgregar(data) {
        axios.post(`http://localhost:3000/tareas/agregar-task`, data, {
            headers: {
                authorization: getToken()
            }
        }).then(res => {
            alert(res.data.message)
        }).catch((error) => {
            alert(error.response.data.message);
        })
    }
    render() {
        return (
            <div className="block w-full border-2 border-green-500 text-xl bg-green-300 text-center h-1/2 rounded-lg p-2">
                <label className="w-full">Titulo</label>
                <input
                className="w-full"
                    type="text"
                    onChange={(event) => this.handleOnInputChange("title", event)}
                />
                <label className="w-full">Descripción</label>
                <input 
                className="w-full"
                type="text" 
                rows="20"
                onChange={(event) => this.handleOnInputChange("description", event)}
                />
                <label className="w-full ">estatus</label>
                <input 
                className="w-full"
                type="text" 
                onChange={(event) => this.handleOnInputChange("estatus", event)}
                />
                <label className="w-full">Fecha a realizar</label>
                <input 
                className="w-full"
                type="datetime-local" 
                onChange={(event) => this.handleOnInputChange("fecha", event)}
                />
                <button className="w-1/3 bg-blue-500 border-4 border-blue-700" onClick={() => this.handleAgregar(this.state)}>Agregar</button>
            </div>
        );
    }
}

export default AddTarea;