import React,{ Component, memo} from 'react';
import '../index.css';
import Botones from './atoms/Boton/Botones';
import BotonesMatrix from "./atoms/BotonesMatrix/BotonesMatrix";

const { BotonesMatrixContainer, BotonesMatrixItem} = BotonesMatrix;

const styles = {
    /*container: {
        display: "inline-flex",
        marginBottom: "15px",
        background: "#525454",
        padding: "1%",
        borderRadius: "5px",
        
    },
    liCont: {
        listStyle: "none",
        paddingLeft: "2px",

    },*/
    muestra:
    {
        background: "#676767",
        borderRadius: "8px",      
        width: "202px",
    }


};


const styles2 = {
    tetts:{
        display: "flex",
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
        this.btns =[
            {
                text: "AC",
                fn: this.handleLimpiar,
                type: "tpButton"
            },
            {
                text: "+/-",
                fn: this.handletest1,
                type: "dark"
            },
            {
                text: "%",
                fn: this.handlePer,
                type: "dark"
            },
            {
                text: "/",
                fn: ()=>this.handleopera2("/"),
                type: "accent"
            },
            {
                text: "7",
                fn: ()=>this.handleNumero("7"),
                type: "dark"
            },
            {
                text: "8",
                fn: ()=>this.handleNumero("8"),
                type: "dark"
            },
            {
                text: "9",
                fn: ()=>this.handleNumero("9"),
                type: "dark"
            },
            {
                text: "x",
                fn: ()=>this.handleopera2("*"),
                type: "accent"
            },
            {
                text: "4",
                fn: ()=>this.handleNumero("4"),
                type: "dark"
            },
            {
                text: "5",
                fn: ()=>this.handleNumero("5"),
                type: "dark"
            },
            {
                text: "6",
                fn: ()=>this.handleNumero("6"),
                type: "dark"
            },
            {
                text: "-",
                fn: ()=>this.handleopera2("-"),
                type: "accent"
            },
            {
                text: "1",
                fn: ()=>this.handleNumero("1"),
                type: "dark"
            },
            {
                text: "2",
                fn: ()=>this.handleNumero("2"),
                type: "dark"
            },
            {
                text: "3",
                fn: ()=>this.handleNumero("3"),
                type: "dark"
            },
            {
                text: "+",
                fn: ()=>this.handleopera2("+"),
                type: "accent"
            },
            {
                text: "0",
                fn: ()=>this.handleNumero("0"),
                type: "dark"
            },
            {
                text: ".",
                fn: this.handlePunto,
                type: "dark"
            },
            {
                text: "=",
                fn: this.handleResultado,
                type: "accent"
            },
        ];
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
                    <BotonesMatrixContainer className={styles2.tetts}>
                        {
                            this.btns.map((btn) => {
                                return(
                                    <BotonesMatrixItem>
                                        <Botones onClick={btn.fn} type={btn.type}>
                                            {btn.text}
                                        </Botones>
                                    </BotonesMatrixItem>
                                );
                            })
                        }
                    </BotonesMatrixContainer>
                    </div>
           </div>
       )
   }
}


export default Calculadora;