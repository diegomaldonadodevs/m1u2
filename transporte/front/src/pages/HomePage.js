import React from "react";

const HomePage = (props) => {
    return (
        <main className="holder">

            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="avion" />
            </div>

            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum veniam temporibus deserunt qui corrupti,
                       possimus facere natus officiis, vel, adipisci sunt quibusdam doloribus id dignissimos voluptas cupiditate
                       officia autem porro.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum veniam temporibus deserunt
                       qui corrupti, possimus facere natus officiis, vel, adipisci sunt quibusdam doloribus id dignissimos voluptas
                       cupiditate officia autem porro.
                    </p>
                </div>

                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente excelente</span>
                        <span className="autor">Juan Perez</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
