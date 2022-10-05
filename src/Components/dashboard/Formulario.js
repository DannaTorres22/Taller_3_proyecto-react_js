import p2 from "./p2.jpeg"
import '../../pages/dasboard/dashboard.css'

function Formulario() {
      return(
    <section className="datos">
                  <div className="formularioDash">
                        <div className="tituloFormulario">
                              <h1>Bienvenido Usuario</h1> 
                        </div>
                        <div className="info">
                              <div className="logo-img">
                                    <img src={p2}/>
                                    <div className="carga">
                                          <div id="log-des"><i className="fa-solid fa-file-arrow-up"></i></div>
                                          <div id="log1-des"><i className="fa-solid fa-upload"></i></div>
                                    </div>
                                    <button>Cambiar Contraseña</button>
                              </div>
                              <div className="formDash">
                                    <div className="docDash">
                                          <div id="infDash">
                                                <label for="tip-doc">Tipo de documento</label>
                                                <input type="text" name="tip-doc" placeholder="CC" className="inputsDash"  />
                                          </div>
                                          
                                          <div id="infDash">
                                                <label for="num-doc">Numero documento</label>
                                                <input type="text" name="num-doc" placeholder="1000000" className="inputsDash"/>

                                          </div>
                                          
                                          
                                    </div>
                                    <div className="nomDash">
                                          <div id="infDash">
                                                <label for="nombre">Nombres</label>
                                                <input type="text" name="nombre" placeholder="Nombre.." className="inputsDash"/>
                                          </div>
                                          <div id="infDash">
                                                <label for="Apellido">Apellidos</label>
                                                <input type="text" name="Apellido" placeholder="Apellidos.." className="inputsDash"/>

                                          </div>
                                    </div>
                                    <div className="origen">

                                          <div id="infDash">
                                                <label for="fecha">Fecha nacimiento</label>
                                                <input type="text" name="fecha" placeholder="DD/MM/YY" className="inputsDash"/>
                                          </div>
                                          <div id="infDash">
                                                <label for="origen">País de origen</label>
                                                <input type="text" name="origen" placeholder="País.." className="inputsDash"/>

                                          </div>
                                    </div>
                                    <div className="genero">
                                          <div id="infDash">
                                                <div className="radioDash">
                                                <label for="fecha">Género</label>
                                                <input type="radio" name="genero" className="inputsDash"/>Mujer
                                                <input type="radio" name="genero" className="inputsDash"/>Hombre
                                                <input type="radio" name="genero" className="inputsDash"/>Otro
                                                </div>
                                          </div>
                                          <div id="infDash">
                                                <label for="tel">Teléfono de contacto</label>
                                                <input type="text" name="tel" placeholder="Teléfono"className="inputsDash" />

                                          </div>

                                    </div>
                                    <div className="act">
                                          <div className="inf">
                                                <button>Actualizar</button>
                                          </div>

                                    </div>
                                    <div className="contraDash">
                                          <div id="infDash">
                                                <label for="password">Contraseña</label>
                                                <input type="password" name="password" className="inputsDash"/>
                                          </div>
                                          <div id="infDash">
                                                <label for="passwordd">Confirmar contraseña</label>
                                                <input type="password" name="passwordd" className="inputsDash"/>

                                          </div>

                                    </div>
                                    <div className="cambio">
                                          <div className="inf">
                                                <button>Cambiar</button>
                                          </div>

                                    </div>

                              </div>

                        </div>
                        
                                  
                  </div>
                  
                        
            </section>
      );
}
export default Formulario
