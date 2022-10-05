import { Link } from 'react-router-dom';
import '../../Components/css-registro/Registro.css'
import Logoblanco from './Hotelia horizontal blanco.svg'

function registro(){
    return(
<body className='registro'>
      <section id="container-grid">
            <div className="logoRegi">
                <div className="img">
                  <img src={Logoblanco} alt=""/>
                  <div className="bienvenido"><p>Eres más que bienvenido</p></div>
                  
            </div>
            </div>
        <div className="formulario">
                  <div className="tittle"><h1>Regístrate</h1></div>
                <div className="form">
                  <div className="doc">
                        <div id="inf">
                              <label for="tip-doc">Tipo de documento</label>
                             <select name="tip-doc" id="tip-doc">
                              <option value="0">Escoja una opción</option>
                              <option value="1">Cédula</option>
                              <option value="2">Tarjeta de identidad</option>
                              <option value="3">Otro</option>
                        </select>
                        </div>
                        <div id="inf">
                              <label for="num-doc">Número documento</label>
                              <input type="text" name="num-doc" placeholder="10000000" className='inputsRegistro' />
                        </div> 
                  </div>
                  <div className="nom">
                        <div id="inf">
                              <label for="nombres">Nombres</label>
                              <input type="text" name="nombres" placeholder="Nombres..." className='inputsRegistro' />
                        </div>
                        <div id="inf">
                              <label for="Apellidos">Apellidos</label>
                              <input type="text" name="Apellidos" placeholder="Apellidos..." className='inputsRegistro' />
                        </div> 
                  </div>
                  <div className="dat">
                        <div id="inf">
                              <label for="FecNac">Fecha de nacimiento</label>
                              <input type="date" name="FecNac" className='inputsRegistro' />
                        </div>
                        <div id="inf">
                              <div className="radio">
                              <label for="fecha">Género</label>
                              <input type="radio" name="genero" className='inputsRegistro' />Mujer
                              <input type="radio" name="genero" className='inputsRegistro' />Hombre
                              <input type="radio" name="genero" className='inputsRegistro' />Otro
                              </div>
                        </div> 
                  </div>
                  <div className="corre">
                        <div id="inf">
                              <label for="Email">Email</label>
                              <input type="email" name="Email" placeholder="correo..." className='inputsRegistro' />
                        </div>
                        <div id="inf">
                              <label for="tel">Teléfono de contacto</label>
                              <input type="text" name="tel" placeholder="teléfono..." className='inputsRegistro' />
                        </div> 
                  </div>
                  <div className="orig">
                        <div id="inf">
                              <label for="país">País deorigen</label>
                              <select name="país" id="país">
                                    <option value="1">option1</option>
                                    <option value="2">option2</option>
                                    <option value="3">option3</option>
                                    <option value="4">option4</option>
                                    <option value="5">option5</option>
                              </select>
                        </div>
                        <div id="inf">
                              <label for="photo">Foto</label>
                              <input type="text" name="photo" placeholder="selecionar archivo" className='inputsRegistro' />
                        </div> 
                  </div>
                  <div className="contraRegi">
                        <div id="inf">
                              <label for="password">Contraseña</label>
                              <input type="password" name="password" className='inputsRegistro' />
                        </div>
                        <div id="inf">
                              <label for="password2">Confirmar contraseña</label>
                              <input type="password2" name="password2" className='inputsRegistro' />
                        </div> 
                    </div>
                
                <div className="terminos">

                  <a href="Terminos.html"><p> <input type="checkbox" className='inputsRegistro' /> Términos y condiciones</p></a>
                  <Link to="/login"><button>Ingresar</button></Link>
                </div>
                <div class="modal">
                    <div class="contened">
                        <header>Terminos y Condiciones</header>
                        <label for="btn-modal">X</label>
                        <div class="contenido">
                            <p>
                                Estos Términos del Servicio reflejan la forma de trabajar de Google como empresa, las
                                leyes por las que nos regimos y
                                determinados aspectos que siempre hemos creido que son ciertos. Por ello, estos Términos
                                del Servicio ayudan a definir
                                la relación que tiene Google contigo cuando interactúas con nuestros servicios, Por
                                ejemplo, estos términos incluyen las
                                siguientes secciones:
                            </p>
                            <p>
                                Qué puedes esperar de nosotros, donde se describe como proporcionamos y desarrollamos
                                nuestros servicios. Lo que
                                esperamos de ti, donde se establecen ciertas reglas para utilizar nuestros servicios.
                            </p>

                            <button>Aceptar</button>
                        </div>


                    </div>
        </div>



                
                
            </div>
        </div>
                

                
            
        </section> 
</body>
    );
}
export default registro;