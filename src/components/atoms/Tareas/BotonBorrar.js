import React, { Component } from 'react';
import "../../../css/Tareas/borrar.css";
import {Button, Modal,ModalHeader ,ModalBody ,ModalFooter} from 'reactstrap';
class Borrar extends Component {
     state={

        activo: false,
     }

     handleActivo=()=>{
        this.setState({activo: !this.state.activo});
    }
    render() {
        return (
            <div>
                <Button color="outline-danger" className="" onClick={this.handleActivo}>Eliminar</Button>
                <Modal isOpen={this.state.activo}>
                    <ModalHeader>
                        ¿Deseas eliminar esta Tarea?
                    </ModalHeader>
                    <ModalBody>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="btn btn-primary" onClick={this.handleActivo}>Cerrar</Button>
                        <button className="btn btn-danger" onClick={this.props.borrar}>Borrar</button>
                    </ModalFooter>
                </Modal>

                
            </div>
        );
    }
}

export default Borrar;