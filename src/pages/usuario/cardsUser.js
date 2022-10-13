import CardUser from "../../Components/lista/CardUser.css";

function CardsUser(){
    return(
        <>
         <Link to="/new">Nuevo Usuario</Link>
            <h1>Listado Usuarios</h1>

            <CardUser/>
        </>
    );
}

export default CardsUser;