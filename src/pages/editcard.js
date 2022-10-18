import { Card } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";


function CardHuesped({users,setUplist,upList,handleClose,handleOpen,setDataModal}){

  
    const url="https://hoteliakuepa.herokuapp.com/users"; 

   
       const handleDelete=async()=>{
        
        Swal.fire({
            title: 'Está seguro que desea eliminar este registro?',
            text: "No puedes revertir está acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText:"Cancelar",
            confirmButtonText: 'Sí, Bórralo!'
          }).then((result) => {

            if (result.isConfirmed) {
                /*Eliminando de la BD */
                axios.delete(`${url}/${users._id}`).then((response)=>{
                console.log(response);
                
                /*Eliminando del estado */
                  if (response.status === 200) {
                    Swal.fire(
                        'Eliminado!',
                        `El estudiante ha sido eliminado exitosamente!`,
                        'success'
                    )
                    setUplist(!upList);
                }else {
                    Swal.fire(
                        'Error!',
                        'Hubo un problema al eliminar el estudiante!',
                        'error'
                    )
                }
       });
            }
        
          })
        
        
    }

    
    const handleEdit=()=>{
        handleOpen();
        setDataModal(users);
    }
    return(
        <div className="col-4 mb-3">
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className="text-center">{users.nombre} {users.apellido}</Card.Title>
                <Card.Text>
                <strong>Tipo Documento: </strong>{users.tipodoc}<br/>
                <strong>No. Documento: </strong>{users.numdoc}<br/>                
                </Card.Text>
                <button className="btn btn-warning me-2" onClick={handleEdit}>Editar</button>
                <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
            </Card.Body>
            
        </Card>
        </div>
     
    );
}

export default CardHuesped;