import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { deleteToken } from "../../utils/auth/Token";
import AddTarea from "../organisms/Tareas/AddTarea";
import TablaTareas from "../organisms/Tareas/TablaTareas";
// import axios from "axios";

class Tareas extends Component {
    
    handleLoguot(){
        deleteToken();
        this.props.history.push("/")
    }
   
    render() {

        return (
            <div className="">
                <TablaTareas></TablaTareas>
                <div className="">
                    <AddTarea></AddTarea>
                    <button className="" onClick={() => this.handleLoguot()}>Cerrar Sesion</button>
                </div>
            </div>
        );
    }

}

export default withRouter(Tareas);