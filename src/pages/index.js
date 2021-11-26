import React from "react";

//Layout
import LayoutPrimary from "layouts/layout-primary";

//images
import image from "assets/images/evento/recursoRecurso 2@2x.png";
import image2 from "assets/images/evento/recursoRecurso 1@2x.png";
import image3 from "assets/images/como-llegar/recursoRecurso 12@2x.png";
import image4 from "assets/images/como-llegar/recursoRecurso 11@2x.png";
//imagenes seccion como llegar?
import image5 from "assets/images/como-llegar/recursoRecurso 4@2x.png";

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

        <div className="como--llegar-container">
          <div className="como--llegar">
            <img src={image3} alt="ine y zorro" className="image3" />
          </div>

          <div className="image4">
            <img src={image4} alt="ine y zorro" />
          </div>
          <div className="line-image1">
            <div className="first-photo">
              <img src={image5} alt="ine y zorro" />
            </div>
            <div className="second-photo">
              <img src={image5} alt="ine y zorro" />
            </div>
          </div>
          {/* <div className="line-image1">
            <img src={image5} alt="ine y zorro" />
            <img src={image5} alt="ine y zorro" />
          </div>
          <div className="line-image1">
            <img src={image5} alt="ine y zorro" />
            <img src={image5} alt="ine y zorro" />
          </div> */}
        </div>
      </div>
    </LayoutPrimary>
  );
};

export default Home;
