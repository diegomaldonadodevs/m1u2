import React from "react";
import '../styles/components/pages/GaleriaPage.css';

const GaleriaPage = (props) => {
    return (
        <main className="holder">
            <div className="galeria">
                <img src="/img/galeria/img01.jpg" alt="camion" />
                <img src="/img/galeria/img02.jpg" alt="mezclador" />
                <img src="/img/galeria/img03.jpg" alt="convoy" />
                <img src="/img/galeria/img04.jpg" alt="ferri" />
                <img src="/img/galeria/img05.jpg" alt="bar" />
                <img src="/img/galeria/img06.jpg" alt="tren 1" />
                <img src="/img/galeria/img07.jpg" alt="tren 2" />
            </div>
        </main>
    );
}

export default GaleriaPage;


