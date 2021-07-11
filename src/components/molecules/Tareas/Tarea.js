import React, { Component } from 'react';

import "../../../css/Tareas/borrar.css";
import Titulo from "../../atoms/Tareas/titulo";
import Descripcion from "../../atoms/Tareas/descripcion";
import Fecha from "../../atoms/Tareas/fechaInicioFin";
import Borrar from '../../atoms/Tareas/BotonBorrar';
import Editar from '../../atoms/Tareas/BotonEditar';


class Tarea extends Component {

    render() {
        return (
            <tr className="bg-blue-200 font-serif">
                <td className="bg-blue-700 text-black text-md rounded-l-lg border-b-2 text-xl border-blue-900 max-w-full w-1/6">
                    <Titulo data={this.props.title} />
                    
                </td>
                <td className="bg-blue-500 text-black text-md border-b-2 border-blue-900 w-3/6">
                    <Descripcion data={this.props.description} />
                </td>
                
                <td className="bg-blue-400 text-blacks text-md border-b-2 border-blue-900">
                    <Fecha data={this.props.fecha} />
                </td>
                <td className=" text-center space-y-2 border-b-2 border-blue-900 rounded-r-lg">
                    <Editar id={this.props.id}></Editar>
                    <Borrar borrar={this.props.borrar}></Borrar>
                </td>
            </tr>
        );
    }
}

export default Tarea;