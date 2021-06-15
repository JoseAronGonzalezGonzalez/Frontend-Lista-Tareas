import React, { Component } from 'react'
import "./Botones.css";
import "../BotonesMatrix/BotonesMatrix.css"
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 * @property {String} type ["tpButton", dark, "accent"] 
 */

class Botones extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        console.log(this.props);

    }

    render() {
        const { type, children , onClick } = this.props;
        let className = "tpButton";
        switch (type) {
            case "accent":
                className = "btn btn-warning";
                break;

            case "dark":
                className = "btn btn-dark";
                break;
            default:
                break;
        }
        return (
            <button {...this.props} className={className}>{children}</button>
        );
    }
}

export default Botones
