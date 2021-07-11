import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
import * as moment from "moment";
import { getToken } from "../../../utils/auth/Token";
import Tarea from "../../molecules/Tareas/Tarea";
import axios from "axios";

class Tareas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tareas: [{
                id: "",
                titulo: "Esto es un titulo",
                description: "Esto es una descripcion",
                estatus: "",
                fecha: "",
            }]
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/tareas/muestra-task`, {
            headers: {
                Authorization: getToken()
            }
        }).then(res => {
            const tareas = res.data.data;
            if (tareas?.length) { this.setState({ tareas }); }

        }).catch((error) => {
            console.log(error.response.data);
        })
    }
    handleBorrar(data) {
        axios.put(`http://localhost:3000/tareas/borrar-task`, { id: data }, {
            headers: {
                authorization: getToken()
            }

        }).then(res => {
            this.componentDidMount();
            alert(res.data.message)

        }).catch((error) => {
            console.log(error.response);
        })
    }
    
    handleActivar(){
        
    }
    render() {
        console.log(this.state.tareas);
        return (
            <div className=" w-2/3 ml-2 h-screen overflow-y-auto">
                <table className="rounded-xl min-w-full">
                    <tbody>
                        <tr className="bg-black rounded-l-md text-white text-lg">
                            <th className="rounded-l-md">Titulo</th>
                            <th>Descripcion</th>
                            <th>estatus</th>
                            <th>Fecha</th>
                            <th className="rounded-r-md">Acciones</th>
                        </tr>
                        {this.state.tareas.map(tarea => {
                            let fecha = moment(tarea.fecha).format('DD-MM-YYYY hh:mm');
                            
                            return (
                                <Tarea
                                    key={`tarea-${tarea.id}`}
                                    title={tarea.title}
                                    description={tarea.description}
                                    estatus={tarea.estatus}
                                    fecha={fecha}
                                    borrar={() => this.handleBorrar(tarea.id)}
                                    id={tarea.id}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Tareas;
