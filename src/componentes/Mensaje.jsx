import './Mensaje.css'


const Mensaje = (props) => {
    return(
        <div className='cardMensaje'>
            <div className="titleDate">
                <p className='title'>{props.name}</p>
                <p className='date'>{props.date}</p>
            </div>
            <p className="shortText">{props.subject}</p>
        </div>
    );
}

export  {Mensaje}