import './Rodape.css'


const Rodape = (props)=>{
    return(
        <section className='rodape'>
            <div>
                <a href="#"><img src="./imagens/fb.png" alt="" /></a>
                <a href="#"><img src="./imagens/tw.png" alt="" /></a>
                <a href="#"><img src="./imagens/ig.png" alt="" /></a>
            </div>
            <img className='logo-organo' src="./imagens/logo.png" alt="" />
            <h3>Desenvolvido por Sandeski</h3>
        </section>
    )

}

export default Rodape