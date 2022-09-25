import "./Opiniones.css"
import p1 from "./p1.jpg"
import p2 from "./p2.jpeg"

function Opiniones() {
    return (
        <section className="opiniones">
            <div className="titulo"><h1>Nuestros usuarios dicen...</h1></div>
            <div className="carrusel">   
                        <div id="op" >
                              <div className="enc">
                              <img src={p1}/>
                              <div className="estrellas">
                                    <h5>Diego rodriguez</h5>
                                    <div>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-regular fa-star"></i>
                                          </div>
                              </div>
                              </div>
                              <div className="ip">
                                    <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.
                                          Elit quis enim ultricies ullamcorper.
                                          Nunc aenean auctor vel diam dictum.
                                    </p>
                              </div>
                        </div>
                        <div id="op">
                              <div className="enc">
                                    <img src={p2}/>
                                    <div className="estrellas">
                                          <h5>Diana Garcia</h5>
                                          <div>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-regular fa-star"></i>
                                          </div>
                                          
                                    </div>
                  
                                    </div>
                                    <div className="ip">
                                          <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.
                                                Elit quis enim ultricies ullamcorper.
                                                Nunc aenean auctor vel diam dictum.
                                          </p>
                                    </div>
                        </div>
                        <div id="op">
                              <div className="enc">
                                    <img src={p1}/>
                                    <div className="estrellas">
                                          <h5>Diego rodriguez</h5>
                                          <div>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                </div>
                                    </div>
                                    
                                    </div>
                                    <div className="ip">
                                          <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.
                                                Elit quis enim ultricies ullamcorper.
                                                Nunc aenean auctor vel diam dictum.
                                          </p>
                                    </div>
                        </div>
            </div>

      </section>
    );
}

export default Opiniones;