import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"
import "./Formulario.css"
import { useState } from "react"


const Formulario = (props) => {

        const [nome, setNome] = useState('');
        const [cargo, setCargo] = useState('');
        const [imagem, setImagem] = useState('');
        const [time, setTime] = useState('');



        const aoSalvar = (event)=>{
            event.preventDefault();
            console.log("Form foi submetido => ",nome,cargo,imagem,time);
            props.aoColaboradorCadastrado({
                nome,
                cargo,
                imagem,
                time
            })
            setNome('')
            setCargo('')
            setImagem('')
            setTime('')
             
        }
    return(

        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto 
                    label="nome" 
                    required={true} 
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor) }

                />
                <CampoTexto 
                    label="cargo" 
                    required={true} 
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    itens={props.times}  
                    required={true}
                    label="Times"  
                    valor={time}
                    aoAlterado={valor => setTime(valor)}

                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;