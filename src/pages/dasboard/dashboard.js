import './dashboard.css'
import Menu from "../../Components/menuL/menu"
import Formulario from '../../Components/dashboard/Formulario'
import p2 from '../../Components/dashboard/p2.jpeg'

function Dashboard(){
    return(
      <div className="container">
        <Menu 
        persona="Angie vargas"
        correo="angie@gmail.com" />
        <Formulario 
        usuario="usuario"
        imagen={p2}/>
      </div>
    );
  }
  
  export default Dashboard;