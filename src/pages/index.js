import React from "react";

//Layout
import LayoutPrimary from "layouts/layout-primary";

//images
import image from "assets/images/evento/recursoRecurso 2@2x.png";
import image2 from "assets/images/evento/recursoRecurso 1@2x.png";
import image3 from "assets/images/como-llegar/recursoRecurso 12@2x.png";
import mapa from "assets/images/como-llegar/recursoRecurso 11@2x.png";

//imagenes seccion como llegar? PRIMERA FILA
import image5 from "assets/images/como-llegar/recursoRecurso 4@2x.png";
import image6 from "assets/images/como-llegar/recursoRecurso 3@2x.png";

//imagenes seccion como llegar? SEGUNDA FILA
import image7 from "assets/images/como-llegar/recursoRecurso 5@2x.png";
import image8 from "assets/images/como-llegar/recursoRecurso 6@2x.png";

//imagenes seccion como llegar? TERCERA FILA
import image9 from "assets/images/como-llegar/recursoRecurso 9@2x.png";
import image10 from "assets/images/como-llegar/recursoRecurso 10@2x.png";

//imagenes regalo
import tituloRegalo from "assets/images/regalos/recursoRecurso 13@2x.png";

const Home = () => {
  return (
    <LayoutPrimary>
      <div className="home__container">
        <h3>X DIAS PARA DEJARLO TODO</h3>
        <img src={image} alt="ine y zorro" className="image1" />
        <div className="fecha--hora">
          <h1>18.02.2022</h1>
          <h1> | 17 HS | </h1>
        </div>

        <div className="direccion">
          <img src={image2} alt="ine y zorro" className="image2" />
          <h1>LA HERENCIA</h1>
          <h3>SARAVIA 1799, PILAR</h3>
        </div>

        {/* COMO LLEGAR INICIO */}

        <div className="como--llegar-container" id="como__llegar">
          <div className="como--llegar">
            <img src={image3} alt="ine y zorro" className="image3" />
          </div>

          <div className="mapa">
            <img src={mapa} alt="ine y zorro" className="ejemplo" />
          </div>

          {/* PRIMERA LINEA DE FOTOS INICIO */}
          <div className="first-line--images">
            <div className="first-photo">
              <img src={image5} alt="ine y zorro" />
            </div>
            <div className="second-photo">
              <img src={image6} alt="ine y zorro" />
            </div>
          </div>
          {/* PRIMERA LINEA DE FOTOS FINAL */}

          {/* SEGUNDA LINEA DE FOTOS INICIO */}
          <div className="first-line--images">
            <div className="first-photo">
              <img src={image7} alt="ine y zorro" />
            </div>
            <div className="second-photo">
              <img src={image8} alt="ine y zorro" />
            </div>
          </div>
          {/* SEGUNDA LINEA DE FOTOS FINAL */}

          {/* TERCERA LINEA DE FOTOS INICIO */}
          <div className="first-line--images">
            <div className="first-photo">
              <img src={image9} alt="ine y zorro" />
            </div>
            <div className="second-photo">
              <img src={image10} alt="ine y zorro" />
            </div>
          </div>
          {/* TERCERA LINEA DE FOTOS FINAL */}
        </div>

        {/* COMO LLEGAR FIN */}

        {/* SECCION REGALOS INICIO */}

        <div className="regalo__section--container">
          <img src={tituloRegalo} alt="ana y zorro" className="titulo" />
        </div>

        {/* SECCION REGALOS FIN */}
      </div>
    </LayoutPrimary>
  );
};

export default Home;
