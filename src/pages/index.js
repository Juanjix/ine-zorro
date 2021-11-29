import React from "react";

//Layout
import LayoutPrimary from "layouts/layout-primary";

//images
import image from "assets/images/evento/recursoRecurso 2@2x.png";
import logoHerencia from "assets/images/evento/recursoRecurso 1@2x.png";
import secondTitle from "assets/images/como-llegar/recursoRecurso 12@2x.png";
import mapa from "assets/images/como-llegar/recursoRecurso 11@2x.png";

// //imagenes seccion como llegar? PRIMERA FILA
// import image5 from "assets/images/como-llegar/recursoRecurso 4@2x.png";
// import image6 from "assets/images/como-llegar/recursoRecurso 3@2x.png";
// import hoja from "assets/images/como-llegar/recursoRecurso 7@2x.png";

// //imagenes seccion como llegar? SEGUNDA FILA
// import image7 from "assets/images/como-llegar/recursoRecurso 5@2x.png";
// import image8 from "assets/images/como-llegar/recursoRecurso 6@2x.png";
// import hoja2 from "assets/images/como-llegar/recursoRecurso 8@2x.png";

// //imagenes seccion como llegar? TERCERA FILA
// import image9 from "assets/images/como-llegar/recursoRecurso 9@2x.png";
// import image10 from "assets/images/como-llegar/recursoRecurso 10@2x.png";

// //imagenes regalo
import thirdTitle from "assets/images/regalos/recursoRecurso 13@2x.png";
import travelPhoto from "assets/images/regalos/recursoRecurso 14@2x.png";
// import regalo1 from "assets/images/regalos/recursoRecurso 18@2x.png";
// import regalo2 from "assets/images/regalos/recursoRecurso 16@2x.png";
// import regalo3 from "assets/images/regalos/recursoRecurso 17@2x.png";
// import regalo4 from "assets/images/regalos/recursoRecurso 15@2x.png";

// //imagenes te esperamos
import fourthTitle from "assets/images/te-esperamos/recursoRecurso 20@2x.png";
import cheersImage from "assets/images/te-esperamos/recursoRecurso 22@2x.png";
const Home = () => {
  return (
    <LayoutPrimary>
      <div className="home__container">
        {/* INICIO SECTION START */}
        <section className="hero" id="inicio">
          <h3 className="cuenta-regresiva">x días para dejarlo todo</h3>
          <img src={image} alt="ine y zorro" className="first--title" />
          <div className="fecha--hora">
            <h1>18 . 02 . 2022</h1>
            <h1> | 1 7 H S | </h1>
          </div>

          <div className="direccion">
            <img
              src={logoHerencia}
              alt="ine y zorro"
              className="logo-herencia"
            />
            <h1>LA HERENCIA</h1>
            <h4>SARAVIA 1799, PILAR</h4>
          </div>
        </section>

        {/* INICIO SECTION END */}

        {/* COMO LLEGAR SECTION START */}
        <section className="ubicacion__container" id="ubicacion">
          <img src={secondTitle} alt="ana y zorro" className="second--title" />

          <div className="mapa">
            <img src={mapa} alt="ana y zorro" />
          </div>
        </section>
        {/* COMO LLEGAR SECTION END */}

        {/* REGALOS SECTION START */}
        <section className="regalos__container" id="regalos">
          <img src={thirdTitle} alt="ana y zorro" className="third--title" />
          <img src={travelPhoto} alt="ine y zorro" className="travel--photo" />
          <div className="como-regalar">
            <h2>
              CUALQUIER REGALO QUE RECIBAMOS LO VAMOS
              <br /> A USAR PARA IRNOS DE LUNA DE MIEL.
            </h2>
            <br></br>
            <br></br>
            <h2>BANCO ICBC</h2>
            <h2>TITULAR DE LA VEGA DIEGO EZEQUIEL</h2>
            <h2>ALIAS: INEYZORRO</h2>
            <h2>CA$ 05010123788809</h2>
            <h2>CBU: 0150501601000237888096</h2>
            <br />
            <br />
            <h1>¡MUCHISIMAS GRACIAS!</h1>
          </div>
        </section>
        {/* REGALOS SECTION END */}

        {/* TE ESPERAMOS SECTION START */}

        <section className="te-esperamos" id="rsvp">
          <div className="te-esperamos--title">
            <img
              src={fourthTitle}
              alt="ana y zorro"
              className="fourth--title"
            />
          </div>
          <img src={cheersImage} alt="ana y zorro" className="cheers" />

          <div>
            <h2>por favor confirmá tu asistencia</h2>
            <h2>+54 9 11 6451 - 4123</h2>
          </div>
        </section>
        {/* TE ESPERAMOS SECTION END */}

        {/* FOOTER START */}
        <div className="footer">
          <h1>#ineyzorro #18f</h1>
        </div>
        {/* FOOTER END */}
      </div>
    </LayoutPrimary>
  );
};

export default Home;
