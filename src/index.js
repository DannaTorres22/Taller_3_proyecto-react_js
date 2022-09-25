import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './components/banner/Banner';
import Descripcion from './components/descripcion/Descripcion';
import Feature from './components/feature/Feature';
import Nav from './components/nav/Nav';
import Ubicanos from './components/ubicanos/Ubicanos';
import Opiniones from './components/opiniones/Opiniones';
import Footer from './components/footer/Footer';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <Banner/>
    <Descripcion/>
    <Feature/>
    <Ubicanos/>
    <Opiniones/>
    <Footer/>
  </React.StrictMode>
);


