import React from "react";
import '../styles/components/pages/ServiciosPage.css';

const ServiciosPage = (props) => {
    return (
        <main className="holder">
            <h2>Servicios</h2>
            <div className="servicio">
                <img src="img/servicios/ferroviario.jpg" alt="tren" />
                <div className="info">
                    <h4>Transporte Ferroviario</h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Consequuntur omnis temporibus sapiente vero, doloribus, sit
                        commodi unde repellendus dolores sequi minima quibusdam repellat
                        deserunt dolorum rerum tempora ipsum ad quisquam!
                    </p>
                </div>
            </div>
            <div className="servicio">
                <img src="img/servicios/aereo.jpg" alt="aereo" />
                <div className="info">
                    <h4>Transporte Aéreo</h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Consequuntur omnis temporibus sapiente vero, doloribus, sit
                        commodi unde repellendus dolores sequi minima quibusdam repellat
                        deserunt dolorum rerum tempora ipsum ad quisquam!
                    </p>
                </div>
            </div>
            <div className="servicio">
                <img src="img/servicios/maritimo.jpg" alt="barco" />
                <div className="info">
                    <h4>Transporte Marítimo</h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Consequuntur omnis temporibus sapiente vero, doloribus, sit
                        commodi unde repellendus dolores sequi minima quibusdam repellat
                        deserunt dolorum rerum tempora ipsum ad quisquam!
                    </p>
                </div>
            </div>
            <div className="servicio">
                <img src="img/servicios/terrestre.jpg" alt="camion" />
                <div className="info">
                    <h4>Transporte Terrestre</h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Consequuntur omnis temporibus sapiente vero, doloribus, sit
                        commodi unde repellendus dolores sequi minima quibusdam repellat
                        deserunt dolorum rerum tempora ipsum ad quisquam!
                    </p>
                </div>
            </div>
        </main>
    );
}

export default ServiciosPage;
