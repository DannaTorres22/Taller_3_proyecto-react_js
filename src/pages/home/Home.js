import React from 'react';
import ReactDOM from 'react-dom/client';
import  Nav from '../../components/nav/Nav'
import  Banner from '../../components/banner/Banner'
import  Descripcion from '../../components/descripcion/Descripcion'
import  Feature from '../../components/feature/Feature'
import Ubicanos from '../../components/ubicanos/Ubicanos';
import Opiniones from '../../components/opiniones/Opiniones';
import Footer from '../../components/footer/Footer';


function Home (){
    return (
        <div className='home'>
        <Nav/>
        <Banner/>
        <Descripcion/>
        <Feature/>
        <Ubicanos/>
        <Opiniones/>
        <Footer/>
        </div> 

);}

export default Home;