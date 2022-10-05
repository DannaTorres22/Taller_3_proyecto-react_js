import "./Banner.css";
import imagen from "./slide.jpg"
function Banner() {
    return (
        <section class="slider">
            <div class="contenido">
                <img src={imagen} id="pt" alt="slide" />
                <div id="textosl">
                    <p>Lorem ipsum dolor sir ameteliter,
                        consectetur adipiscing elit.
                    </p>
                </div>
            </div>

        </section>
    );
}

export default Banner;