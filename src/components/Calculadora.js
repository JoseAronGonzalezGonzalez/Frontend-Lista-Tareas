import React,{ Component, memo} from 'react';
import '../index.css';

const styles = {
    container: {
        display: "inline-flex",
        marginBottom: "15px",
        background: "#525454",
        padding: "1%",
        borderRadius: "5px",
        
    },
    liCont: {
        listStyle: "none",
        paddingLeft: "2px",

    },
    muestra:
    {
        background: "#676767",
        borderRadius: "8px",      
        width: "202px",
    }



};

class Calculadora extends Component {
    constructor(props) {
        super(props);
        this.state ={

            value: "0",
            click: "",
        };
        this.o = true;
    }
    
    handleLimpiar =() =>{
        
        this.setState({value: "0", click: ""});
        this.o=true;
    };
    handlePer = () =>{
        const {value, click} = this.state;
        if (click) {
            this.setState({
                value: ((parseFloat(click) * parseFloat(value))/100).toString(),
            });
        }else{
            this.setState({
                value: (parseFloat(value)/100).toString(),
            });
        }
    };
    handleopera2 = (operador) => {
        const { value, click }= this.state;
        if (value[value.length] !== ".") {
            this.o = true;
            this.setState({
                click: (click ? eval(click + value) : value).toString() + operador,
                value:"0",
            });
        }
    };
    handlePunto = () => {
        const {value} = this.state;
        if (value.includes(".")) {
            if (value ==="0") {
                this.setState({value: "0." });
                this.o = false;
            }else{
                this.setState({value: value + "." });
            }
        }
    };

    handleResultado = () =>{
        const { value, click } = this.state;
        if (click && value[value.length]!== ".") {
            this.setState({
                value: eval(click + value).toString(),
                click:"",
            });
        }
    };

    handletest1 =() =>{
        const{ value,click } = this.state;
        if (value !== "0" && value[value.length]!== ".") {
            
            this.setState({
                value: [0]==="-" ? value.substr(1): "-" + value,
            });
        }
    };

    handleNumero =(numero) =>{
        const {value, click}= this.state;
        console.log(numero);
        if (this.o) {
            this.setState({
                value: numero,
            });
        }else{

            this.setState({value: value+numero});
        }
        this.o=false;
    };

   render() {
       const {value,click}=this.state;
       return (

           <div className="container" >

                <div > <label style={styles.muestra}>{click}{value}</label></div>

                <div style={styles.container}>
                    <ul style={styles.liCont}>
                        <li>
                            <button className="btn btn-dark" onClick={this.handleLimpiar}>AC</button>
                        </li>
                        <li>
                            <button className="btn btn-dark" onClick={()=>this.handleNumero("7")}>7</button>
                        </li>
                        <li>
                            <button className="btn btn-dark" onClick={()=>this.handleNumero("4")}>4</button>
                        </li>
                        <li>
                            <button className="btn btn-dark" onClick={()=>this.handleNumero("1")}>1</button>
                        </li>
                        <li>
                            <button className="btn btn-dark" onClick={()=>this.handleNumero("0")}>0</button>
                        </li>
                    </ul>
                    <ul style={styles.liCont}>
                        <li>
                            <button className="btn btn-dark" onClick={this.handletest1}>-/+</button>
                        </li>
                        <li>
                            <button className="btn btn-dark" onClick={()=>this.handleNumero("8")}>8</button>
                        </li>
                        <li>
                            <button className="btn btn-dark" onClick={()=>this.handleNumero("5")}>5</button>
                        </li>
                        <li>
                            <button className="btn btn-dark" onClick={()=>this.handleNumero("2")}>2</button>
                        </li>
                        <li>
                            <button className="btn btn-dark" onClick={this.handlePunto}>.</button>
                        </li>
                    </ul>
                    <ul style={styles.liCont}>
                        <li>
                            <button className="btn btn-dark" onClick={this.handlePer}>%</button>
                        </li>
                        <li>
                            <button className="btn btn-dark" onClick={()=>this.handleNumero("9")}>9</button>
                        </li>
                        <li>
                            <button className="btn btn-dark" onClick={()=>this.handleNumero("6")}>6</button>
                        </li>
                        <li>
                            <button className="btn btn-dark" onClick={()=>this.handleNumero("3")}>3</button>
                        </li>
                        <li>
                            <button className="btn btn-dark" onClick={this.handlePunto}>.</button>
                        </li>
                    </ul>
                    <ul style={styles.liCont}>
                        <li>
                            <button className="btn btn-warning" onClick={() => this.handleopera2("/")}>/</button>
                        </li>
                        <li>
                            <button className="btn btn-warning" onClick={()=>this.handleopera2("*")}>*</button>
                        </li>
                        <li>
                            <button className="btn btn-warning" onClick={()=>this.handleopera2("-")}>-</button>
                        </li>
                        <li>
                            <button className="btn btn-warning" onClick={()=>this.handleopera2("+")}>+</button>
                        </li>
                        <li>
                            <button className="btn btn-warning" onClick={this.handleResultado}>=</button>
                        </li>
                    </ul>
                </div>
           </div>
       )
   }
}


export default Calculadora;