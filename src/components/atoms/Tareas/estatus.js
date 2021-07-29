import React, { Component } from "react";
import "../../../css/Tareas/titulo.css";

class Estatus extends Component {

    render() {
        return (
            <div className="p-3">
                {this.props.data}
            </div>
        );
    }

}

export default Estatus;