import React, { Component } from "react";
import axios from "axios";
import { getToken } from "../../../utils/auth/Token";

import {Button, Modal,ModalHeader ,ModalBody ,ModalFooter} from 'reactstrap';

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

    state={

        act: false,
     }

     handleActivado=()=>{
        this.setState({act: !this.state.act});
    }

    render() {
        return (

            <div className="">

                <div>
                    <Button color="outline-info" className="" onClick={this.handleActivado}>Agregar Nueva Tarea</Button>
                    <Modal isOpen={this.state.act}>
                        <ModalHeader>
                            Agregando Nueva Tarea
                        </ModalHeader>
                        <ModalBody>
                            <label className="">Titulo</label>
                            <input className="" type="text" onChange={(event) => this.handleOnInputChange("title", event)}/>
                            
                            <label className="">Descripción</label>
                            <input className="" type="text" onChange={(event) => this.handleOnInputChange("description", event)}/>
                            
                            <label className="">Estatus</label>
                            <div>       
                                <input className="radioInput" type="radio" id="Sin Realizar" name="Sin Realizar" value="Sin Realizar" onChange={(event) => this.handleOnInputChange("estatus", event)}/>
                                <label for="Sin Realizar">Sin Realizar</label>
                            </div>
                            <div>       
                                <input className="radioInput" type="radio" id="Realizado" name="Realizado" value="Realizado" onChange={(event) => this.handleOnInputChange("estatus", event)}/>
                                <label for="Realizado">Realizado</label>
                            </div>               

                            <label className="">Fecha a realizar</label>
                            <input className="" type="datetime-local" onChange={(event) => this.handleOnInputChange("fecha", event)}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button className="btn btn-primary" onClick={this.handleActivado}>Cerrar</Button>
                            <button className="btn btn-info" onClick={() => {this.handleAgregar(this.state); this.handleActivado();}}>Agregar</button>
                        </ModalFooter>
                    </Modal>

                    
                </div>
            </div>
        );
    }
}

export default AddTarea;