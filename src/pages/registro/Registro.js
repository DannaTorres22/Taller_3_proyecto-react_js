import axios from "axios";
import '../../Components/css-registro/Registro.css'
import Logoblanco from './Hotelia horizontal blanco.svg'
import Swal from 'sweetalert2';
import { useState } from "react";
import { useNavigate } from "react-router";


function Registro(){

      /*Constante history para retornar al listado*/
             const history=useNavigate();
      /*Inicializamos los inputs en el estado, para poder recibir los valores que se digiten en él y controlarlos */

          const [data,setData]=useState({_id:"",tipodoc:"",nombre:"",apellido:"",fnacimiento:"",genero:"",email:"",
          telefono:"",paisorigen:"",password:"",tipouser:"",img:""});

 /*Se usa la función handleChange para que cada vez que haya un cambio en el input guarde el name y el value del mismo */
 const handleChange=({target})=>{
     //Cada vez que haya un cambio se va a guardar el valor en el estado data
     setData({
         ...data,
         [target.name]:target.value
     })
 }

 /*Crear petición asíncrona*/
 const url="https://hoteliakuepa.herokuapp.com/users";  

 /*funci{on para procesar el envío del formulario*/
     const handleSubmit=async(e)=>{
         e.preventDefault();
         const response=await axios.post(url,data);
         //console.log(response);
         if (response.status === 201) {
             
             Swal.fire(
                 'Guardado!',
                 `El estudiante <strong> ${response.data.nombre} ${response.data.apellido}</strong> ha sido guardado exitosamente!`,
                 'success'
             )
             history.push("/");
             
         }else {
             Swal.fire(
                 'Error!',
                 'Hubo un problema al registrar el estudiante!',
                 'error'
             )
         }
     }

    return(

<body className='registro'>
      <section className="container-grid">
            <div className="logoRegi">
                <div className="img">
                  <img src={Logoblanco} alt=""/>
                  <div className="bienvenido"><p>Eres más que bienvenido</p></div>
                  
            </div>
            </div>
        <div className="formulario" onSubmit={handleSubmit}>
                  <div className="tittle"><h1>Regístrate</h1></div>
                <div className="form">
                  <div className="doc">
                        <div className="inf">
                              <label for="tip-doc">Tipo de documento</label>
                             <select name="tipodoc" onChange={handleChange} id="tip-doc" >
                              <option value="Escoja una opción">Escoja una opción</option>
                              <option value="Cédula">Cédula</option>
                              <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                              <option value="Otro">Otro</option>
                        </select>
                        </div>
                        <div className="inf">
                              <label for="num-doc">Número documento</label>
                              <input type="text" name="_id" value={data._id} onChange={handleChange} placeholder="10000000" className='inputsRegistro' />
                        </div> 
                  </div>
                  <div className="nom">
                        <div className="inf">
                              <label for="nombres">Nombres</label>
                              <input type="text" name="nombre" value={data.nombre} onChange={handleChange} placeholder="Nombres..." className='inputsRegistro' />
                        </div>
                        <div className="inf">
                              <label for="Apellidos">Apellidos</label>
                              <input type="text" name="apellido"  value={data.apellido} onChange={handleChange} placeholder="Apellidos..." className='inputsRegistro' />
                        </div> 
                  </div>
                  <div className="dat">
                        <div className="inf">
                              <label for="FecNac">Fecha de nacimiento</label>
                              <input type="date" name="fnacimiento" value={data.fnacimiento} onChange={handleChange} className='inputsRegistro' />
                        </div>
                        <div class="inf">
                              <div className="radio">
                              <label for="fecha">Género</label>
                              <input type="radio" name="genero" className='inputsRegistro' />Mujer
                              <input type="radio" name="genero" className='inputsRegistro' />Hombre
                              <input type="radio" name="genero" className='inputsRegistro' />Otro
                              </div>
                        </div> 
                  </div>
                  <div className="corre">
                        <div className="inf">
                              <label for="Email">Email</label>
                              <input type="email" name="email"  value={data.email} onChange={handleChange} placeholder="correo..." className='inputsRegistro' />
                        </div>
                        <div className="inf">
                              <label for="tel">Teléfono de contacto</label>
                              <input type="text" name="telefono" value={data.telefono} onChange={handleChange} placeholder="teléfono..." className='inputsRegistro' />
                        </div> 
                  </div>
                  <div className="orig">
                        <div className="inf">
                              <label for="país">País deorigen</label>
                              <select name="paisorigen" onChange={handleChange} id="país">
                                    <option value="Colombia">Colombia</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Chile">Chile</option>
                                    <option value="Panama">Panama</option>
                              </select>
                        </div>
                        <div className="inf">
                              <label for="photo">Foto</label>
                              <input type="file" name="img" value={data.img} onChange={handleChange} placeholder="selecionar archivo" className='inputsRegistro' />
                        </div> 
                  </div>
                  <div className="contraRegi">
                        <div className="inf">
                              <label for="password">Contraseña</label>
                              <input type="password" name="password" value={data.password} onChange={handleChange} className='inputsRegistro' />
                        </div>
                        <div className="inf">
                              <label for="password2">Confirmar contraseña</label>
                              <input type="password" name="password2" className='inputsRegistro' />
                        </div> 
                    </div>
                
                    <div className="terminos">
                                          <a href="Terminos.html"><p> <input type="checkbox" className='inputsRegistro' /> Términos y condiciones</p></a>
                                          <button onClick={handleSubmit}>Ingresar</button>

                                    </div>
                
                
            </div>
        </div>             
            
        </section> 
</body>
    );
}
export default Registro;