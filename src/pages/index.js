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
import hoja from "assets/images/como-llegar/recursoRecurso 7@2x.png";

//imagenes seccion como llegar? SEGUNDA FILA
import image7 from "assets/images/como-llegar/recursoRecurso 5@2x.png";
import image8 from "assets/images/como-llegar/recursoRecurso 6@2x.png";
import hoja2 from "assets/images/como-llegar/recursoRecurso 8@2x.png";

//imagenes seccion como llegar? TERCERA FILA
import image9 from "assets/images/como-llegar/recursoRecurso 9@2x.png";
import image10 from "assets/images/como-llegar/recursoRecurso 10@2x.png";

//imagenes regalo
import tituloRegalo from "assets/images/regalos/recursoRecurso 13@2x.png";
import travelPhoto from "assets/images/regalos/recursoRecurso 14@2x.png";
import regalo1 from "assets/images/regalos/recursoRecurso 18@2x.png";
import regalo2 from "assets/images/regalos/recursoRecurso 16@2x.png";
import regalo3 from "assets/images/regalos/recursoRecurso 17@2x.png";
import regalo4 from "assets/images/regalos/recursoRecurso 15@2x.png";

//imagenes te esperamos
import tituloTeEsperamos from "assets/images/te-esperamos/recursoRecurso 20@2x.png";
import cheers from "assets/images/te-esperamos/recursoRecurso 22@2x.png";
const Home = () => {
  return (
    <LayoutPrimary>
      <div className="home__container">
        <section id="inicio">
          <h3>X DIAS PARA DEJARLO TODO</h3>
          <img src={image} alt="ine y zorro" className="first--title" />
          <div className="fecha--hora">
            <h1>18 . 02 . 2022</h1>
            <h1> | 1 7 H S | </h1>
          </div>

          <div className="direccion">
            <img src={image2} alt="ine y zorro" className="image2" />
            <h1>LA HERENCIA</h1>
            <h4>SARAVIA 1799, PILAR</h4>
          </div>
        </section>
      </div>
    </LayoutPrimary>
  );
};

export default Home;
