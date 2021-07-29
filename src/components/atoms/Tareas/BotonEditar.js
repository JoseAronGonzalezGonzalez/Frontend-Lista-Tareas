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
                <Button className="btn btn-success" onClick={this.handleEstado}>Editar</Button>

                <Modal isOpen={this.state.estado}>
                    <ModalHeader>
                        Modificar
                    </ModalHeader>
                    <ModalBody>
                    <div className="">
                        <label className="">Titulo</label>
                        <input
                            className="" type="text"
                            onChange={(event) => this.handleOnInputChange("title", event)}/>
                        <label className="">Descripción</label>
                        <input
                            className="" type="text" onChange={(event) => this.handleOnInputChange("description", event)}/>
                        <label className="">estatus</label>
                        <input
                            className="" type="text" onChange={(event) => this.handleOnInputChange("estatus", event)}/>
                        <label className="">Fecha a realizar</label>
                        <input
                            className="" type="datetime-local" onChange={(event) => this.handleOnInputChange("fecha", event)}/>
                        <button className="" onClick={() => { this.handleEditar(this.state); this.handleEstado(); }} >Aceptar</button>
                    </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="btn btn-primary" onClick={this.handleEstado}>
                            Cerrar
                        </Button>
                    </ModalFooter>
                </Modal>

                
            </div>
        );
    }
}

export default Editar;