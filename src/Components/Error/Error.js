import './Error.css';
import persona from './Hotelia horizontal blanco.svg' ;
function error(){
      return(
            <div class="container">
            <div id="mensaje">
                  <p id="letr">ERROR 404</p>
                  <a href=""><img src={persona} /></a>
                  <p id="letr-1">Pagina no encontrada...</p>
            </div>
      </div>
      );
}
export default error;