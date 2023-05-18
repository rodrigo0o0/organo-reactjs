import './CampoTexto.css';



const CampoTexto = (props) =>{

    const aoAlterado = (e) =>{
        props.aoAlterado(e.target.value);
    }




    return (
        <div className="campo-texto">
            <label htmlFor="nome">{props.label}</label>
            <input value={props.valor} onChange={aoAlterado}   placeholder={props.placeholder} required={props.required} />
        </div>
    ) 
}


export default CampoTexto;