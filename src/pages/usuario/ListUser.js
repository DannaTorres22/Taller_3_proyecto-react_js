import axios from 'axios';
import { useEffect,useState} from "react";
import { Link } from 'react-router-dom';

function ListUser(){

    /*1. Definir url del api, generar peticiones asíncronas */
    const url="https://hoteliakuepa.herokuapp.com/users";

    /*2. Creó función para conectarse a la api y ejecutar petición tipo get */
    const getData=async()=>{
        const response=axios.get(url);
        return response;
    }

    /*3. useState para guardar la respuesta de la petición en un estado*/
    const [list,setList]=useState([]);

    /*4 usseEfect para ejecutar funciones desde el inicio del renderizado */
    useEffect(()=>{
        getData().then((response)=>{ //promesa
            setList(response.data); //escribir en el useState List
        })
    },[])

    
    //console.log(list)
    
    return(
        
        <>
        <p><Link to='/'>volver</Link></p>
            <table border="1">
                <tr>
                    <th>No. Documento</th>
                    <th>Tipo <br/> Documento</th>
                    <th>Nombre Apellido</th>
                    <th>Fecha de nacimiento</th>
                    <th>Genero</th>
                    <th>Email</th>
                    <th>Telefono</th>
                    <th>Pais de origen</th>
                    <th>Contraseña</th>
                    <th>Tipo usuario</th>
                </tr>
                {list.map((us,index)=>(
                    <tr>
                        <td>{us._id}</td>
                        <td>{us.tipodoc}</td>
                        <td>{us.nombre} {us.apellido}</td>
                        <td>{us.fnacimiento}</td>
                        <td>{us.genero}</td>
                        <td>{us.email}</td>
                        <td>{us.telefono}</td>
                        <td>{us.paisorigen}</td>
                        <td>{us.password}</td>
                        <td>{us.tipouser}</td>
                        
                    </tr>
                ))
                }
                
            </table>
        </>
    );







    }


export default ListUser;