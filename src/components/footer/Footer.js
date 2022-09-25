import "./Footer.css"

function Footer() {
    return (
        <footer className="footer-container">
            <div className="text-footer">
                <div className="text t">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolores, necessitatibus impedit tempora nulla nemo?</p>
                    <div className="redes">
                        <div className="red">
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                    <hr className="hr" />
                </div>
                <div className="text t2">
                    <div className="icons">
                        <div>
                            <i className="fa-solid fa-location-dot"></i><p>AVENIDA CARRERA 8, #12A-42, BOGOTA DC, COLOMBIA</p>
                        </div>
                        <div>
                            <i className="fa-solid fa-phone"></i><p>+57 601 4567899</p>
                        </div>
                    </div>
                    <hr className="hr" />
                </div>
                <div className="text t3">
                    <div>
                        <p>Políticas de privacidad</p>
                    </div>
                    <div id="separador">
                        <p>Políticas de privacidad</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer