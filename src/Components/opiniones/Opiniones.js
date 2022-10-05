import "./Opiniones.css"

function Opiniones({imagen,nombre,reseña}) {
    return (
      <section class="opiniones">
      <div class="titulo"><h1>Nuestros usuarios dicen...</h1></div>
      <div class="carrusel">   
                  <div id="op" >
                        <div class="enc">
                        <img src={imagen} alt="imagen"/>
                        <div class="estrellas">
                              <h5>{nombre}</h5>
                              <div>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    </div>
                        </div>
                        </div>
                        <div class="ip">
                              <p> {reseña} </p>
                        </div>
                  </div>
                  <div id="op">
                        <div class="enc">
                              <img src={imagen} alt="imagen" />
                              <div class="estrellas">
                                    <h5>{nombre}</h5>
                                    <div>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    </div>
                                    
                              </div>
            
                              </div>
                              <div class="ip">
                                    <p> {reseña} </p>
                              </div>
                  </div>
                  <div id="op">
                        <div class="enc">
                              <img src={imagen} alt="imagen" />
                              <div class="estrellas">
                                    <h5>{nombre}</h5>
                                    <div>
                                          <i class="fa-solid fa-star"></i>
                                          <i class="fa-solid fa-star"></i>
                                          <i class="fa-solid fa-star"></i>
                                          <i class="fa-solid fa-star"></i>
                                          <i class="fa-regular fa-star"></i>
                                          </div>
                              </div>
                              
                              </div>
                              <div class="ip">
                                    <p> {reseña} </p>
                              </div>
                  </div>
      </div>

</section>  
    );
}

export default Opiniones;