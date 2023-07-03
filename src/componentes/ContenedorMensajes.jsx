import './ContenedorMensajes.css'

const ContenedorMensaje = (props) => {
    return(
        <section className='bodyMensajes'>
            {props.children}
        </section>
    );
}

export  {ContenedorMensaje}