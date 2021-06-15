import React, { Children, Component } from 'react'
import styles from "./BotonesMatrix.css";



class BotonesMatrixContainer extends Component {
    render() {
        return (
            <ul className={styles.BotonesMatrixContainer}>
                {this.props.children}
            </ul>
        );
    }
}

class BotonesMatrixItem extends Component {
    render(){
        return(
            
        <li className={styles.BotonesMatrixItem}>
            {this.props.children}
        </li>
        );
    }
}


const BotonesMatrix = {
    BotonesMatrixContainer,
    BotonesMatrixItem,
};

export default BotonesMatrix;
