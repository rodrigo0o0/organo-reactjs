import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"

import "./Formulario.css"

const aoSalvar = (event)=>{
    event.preventDefault();
    console.log("Submetido");
}


export const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        ' Inovação e Gestão'
        ];
    return(

        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto label="nome" required={true} placeholder="Digite o seu nome"/>
                <CampoTexto label="cargo" required={true} placeholder="Digite o seu cargo"/>
                <CampoTexto label="imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa itens={times}  label="Times" />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}