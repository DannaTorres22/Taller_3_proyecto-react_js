import '../../Components/csslogin/Login.css'
import persona from './Hotelia horizontal negro.svg' ;
import {Link} from 'react-router-dom';
function Login(){
    return(
<body className='loginBody'>
    <section className='sectionLogin'>
        <div id="logo">
            <a href=""><img src={persona} /></a>
        </div>
        <div className="login">
            <i className="login fa-solid fa-user" />
            <form action="#">
                <div className="iniciosesion">
                    <label for="">Usuario</label>
                    <input type="text" className='usuario' />
                </div>
                <div className="iniciosesion">  
                    <label for="">Contraseña</label>
                    <input type="text" className='contraLogi' />
                </div>
                <button id="boton"><Link to='/dashboard'>Ingresar</Link></button>
                <p>¿No tienes una cuenta?<Link to='/registro'>Regístrate aquí.</Link> </p>
            </form>
        </div>
    </section>
</body>
    );
}
export default Login;