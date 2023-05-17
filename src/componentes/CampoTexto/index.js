import { useState } from 'react';
import './CampoTexto.css';



const CampoTexto = (props) =>{


    const[valor, setValor] = useState('abacaxi');

    const aoDigitado = (event)=>{
        setValor(event.target.value);
        console.log(valor);
    }

    return (
        <div className="campo-texto">
            <label htmlFor="nome">{props.label}</label>
            <input onChange={aoDigitado} type="text" name="nome" id="nome" placeholder={props.placeholder} required={props.required} value={valor}/>
        </div>
    ) 
}


export default CampoTexto;