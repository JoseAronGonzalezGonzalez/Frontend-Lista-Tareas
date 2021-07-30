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
   
    style={

        marginTop: '10px',
        marginBottom: '10px',
    }

    render() {

        return (
            <div className="container">
                
                <button className="btn btn-outline-dark" style={this.style} onClick={() => this.handleLoguot()}>Cerrar Sesion</button>
                <TablaTareas></TablaTareas>
                <div className="">
                    <AddTarea></AddTarea>
                </div>
            </div>
        );
    }

}

export default withRouter(Tareas);