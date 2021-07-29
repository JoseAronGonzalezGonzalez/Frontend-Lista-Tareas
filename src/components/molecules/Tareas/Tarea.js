import React, { Component } from 'react';

import "../../../css/Tareas/borrar.css";
import Titulo from "../../atoms/Tareas/titulo";
import Descripcion from "../../atoms/Tareas/descripcion";
import Fecha from "../../atoms/Tareas/fechaInicioFin";
import Borrar from '../../atoms/Tareas/BotonBorrar';
import Editar from '../../atoms/Tareas/BotonEditar';
import Estatus from "../../atoms/Tareas/estatus";

class Tarea extends Component {

    render() {
        return (
            <tr className="">
                <td className="">
                    <Titulo data={this.props.title} />
                    
                </td>
                <td className="">
                    <Descripcion data={this.props.description} />
                </td>
                <td className="">
                    <Estatus data={this.props.estatus}/>
                </td>
                <td className="">
                    <Fecha data={this.props.fecha} />
                </td>
                <td className="">
                    <Editar id={this.props.id}></Editar>
                    <Borrar borrar={this.props.borrar}></Borrar>
                </td>
            </tr>
        );
    }
}

export default Tarea;