import Banner from '../../Components/banner/Banner';
import Descripcion from '../../Components/descripcion/Descripcion';
import Feature from '../../Components/feature/Feature';
import Nav from '../../Components/nav/Nav';
import Ubicanos from '../../Components/ubicanos/Ubicanos';
import Opiniones from '../../Components/opiniones/Opiniones';
import imagen from '../../Components/opiniones/p2.jpeg';
import Footer from '../../Components/footer/Footer';

function index(){
  return(
    <div>
    <Nav/>
    <Banner/>
    <Descripcion/>
    <Feature/>
    <Ubicanos/>
    <Opiniones
    imagen={imagen}
    nombre="Diego Rodriguez"
    reseña="Lorem ipsum dolor sit amet, consectet adipiscing elit. Elit quis enim ultricies ullamcorper. Nunc aenean auctor vel diam dictum."/>
    <Footer/> 
  </div>
  );
}

export default index;