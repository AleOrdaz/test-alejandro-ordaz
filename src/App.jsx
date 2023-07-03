import {ContenedorMensaje} from "./componentes/ContenedorMensajes"
import {Mensajes} from "./componentes/Mensajes";

const App = () => {
    return(
        <ContenedorMensaje>
            <Mensajes />
        </ContenedorMensaje>
    );
}

export default App