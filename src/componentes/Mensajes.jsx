import './Mensajes.css'
import { Mensaje } from './Mensaje';
import data from '../mail-data.json';

const Mensajes = () => {
    return(
        <div className='body'>
            <div className='card'>
                {data.map( email => 
                    <Mensaje 
                        key={email.from}
                        name={email.from}
                        date={email.date}
                        subject={email.subject}
                    /> 
                )}
            </div>
            <div className='textMensaje'><p>
                {
                }
                </p></div>
        </div>
    );
}

export  {Mensajes}