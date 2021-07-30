import React, { Component } from 'react';
import "../../../css/Tareas/editar.css";
import axios from "axios";
import { getToken } from '../../../utils/auth/Token';
import {Button, Modal,ModalHeader ,ModalBody ,ModalFooter} from 'reactstrap';

class Editar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            estado: false,
            id: this.props.id,
        }
    }

    style={
        padding: '5% 15%',
        marginBottom: '8px',
    }

    handleEstado=()=>{
        this.setState({estado: !this.state.estado});
    }

    handleOnInputChange = (key, event) => {
        this.setState({
            [key]: event.target.value,
        });
    };

    handleEditar(data) {
        console.log(this.state)
        axios.put(`http://localhost:3000/tareas/modificar-task`, {
            id: data.id,
            title: data.title,
            description: data.description,
            estatus: data.estatus,
            fecha: data.fecha,
        }, {
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
            <div>
                <Button color="outline-success" className="editarBtn" style={this.style} onClick={this.handleEstado}>Editar</Button>

                <Modal isOpen={this.state.estado}>
                    <ModalHeader>
                        Modificar
                    </ModalHeader>
                    <ModalBody>
                    <div className="contenedor1">
                        <label className="">Titulo</label>
                        <input
                            className="" type="text"
                            onChange={(event) => this.handleOnInputChange("title", event)}/>
                        <label className="">Descripción</label>
                        <input
                            className="" type="text" onChange={(event) => this.handleOnInputChange("description", event)}/>
                        <label className="">estatus</label>
                        <div>
                            
                            <input className="radioInput" type="radio" id="Sin Realizar" name="Sin Realizar" value="Sin Realizar" onChange={(event) => this.handleOnInputChange("estatus", event)}/>
                            <label for="Sin Realizar">Sin Realizar</label>
                        </div>
                        <div>
                            
                            <input className="radioInput" type="radio" id="Realizado" name="Realizado" value="Realizado" onChange={(event) => this.handleOnInputChange("estatus", event)}/>
                            <label for="Realizado">Realizado</label>
                        </div>
                       
                        <label className="">Fecha a realizar</label>
                        <input
                            className="" type="datetime-local" onChange={(event) => this.handleOnInputChange("fecha", event)}/>
                        
                    </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="btn btn-primary" onClick={this.handleEstado}>
                            Cerrar
                        </Button>
                        <button className="btn btn-success" onClick={() => { this.handleEditar(this.state); this.handleEstado(); }} >Guardar</button>
                    </ModalFooter>
                </Modal>

                
            </div>
        );
    }
}

export default Editar;