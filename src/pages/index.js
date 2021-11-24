import React from "react";
import LayoutPrimary from "layouts/layout-primary";
import image from "assets/images/evento/recursoRecurso 2@2x.png";
import image2 from "assets/images/evento/recursoRecurso 1@2x.png";

const Home = () => {
  return (
    <LayoutPrimary>
      <div className="evento">
        <h1>x dias para dejarlo todo</h1>
        <img src={image} alt="ine y zorro" />
        <h1>18.02.2022</h1>
        <h1> | 17 HS | </h1>
        <div className="direccion">
          <img src={image2} alt="ine y zorro" />
          <h1>La Herencia</h1>
          <h2>Saravia 1799, pilar</h2>
        </div>
      </div>
    </LayoutPrimary>
  );
};

export default Home;
