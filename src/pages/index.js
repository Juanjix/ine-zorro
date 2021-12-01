// React
import React from "react";

// Layout
import LayoutPrimary from "layouts/layout-primary";

// Images
import image from "assets/images/evento/recursoRecurso 2@2x.png";
import logoHerencia from "assets/images/evento/recursoRecurso 1@2x.png";
import secondTitle from "assets/images/como-llegar/recursoRecurso 12@2x.png";
import mapa from "assets/images/como-llegar/recursoRecurso 11@2x.png";

// Imagenes seccion como llegar? PRIMERA FILA
import firstPhotoMap from "assets/images/como-llegar/recursoRecurso 4@2x.png";
import secondPhotoMap from "assets/images/como-llegar/recursoRecurso 3@2x.png";
import lief from "assets/images/como-llegar/recursoRecurso 7@2x.png";

// Imagenes seccion como llegar? SEGUNDA FILA
import thirdPhotoMap from "assets/images/como-llegar/recursoRecurso 5@2x.png";
import fourPhotoMap from "assets/images/como-llegar/recursoRecurso 6@2x.png";
import lief2 from "assets/images/como-llegar/recursoRecurso 8@2x.png";

// Imagenes seccion como llegar? TERCERA FILA
import fifthPhotoMap from "assets/images/como-llegar/recursoRecurso 9@2x.png";
import sixthPhotoMap from "assets/images/como-llegar/recursoRecurso 10@2x.png";

// Imagenes section dresscode
import dressTitle from "assets/images/dresscode/recursoRecurso 5@2x.png";
import dressCodeImage1 from "assets/images/dresscode/recursoRecurso 4@2x.png";
import dressCodeLief1 from "assets/images/dresscode/recursoRecurso 1@2x.png";
import dressCodeImage2 from "assets/images/dresscode/recursoRecurso 2@2x.png";
import dressCodeLief2 from "assets/images/dresscode/recursoRecurso 3@2x.png";

// Imagenes regalo
import thirdTitle from "assets/images/regalos/recursoRecurso 13@2x.png";
import travelPhoto from "assets/images/regalos/recursoRecurso 14@2x.png";
import giftPhoto1 from "assets/images/regalos/recursoRecurso 16@2x.png";
import giftPhoto2 from "assets/images/regalos/recursoRecurso 18@2x.png";
import giftPhoto3 from "assets/images/regalos/recursoRecurso 15@2x.png";
import giftPhoto4 from "assets/images/regalos/recursoRecurso 17@2x.png";

// Imagenes confirmación section
import fourthTitle from "assets/images/te-esperamos/recursoRecurso 20@2x.png";
import cheersImage from "assets/images/te-esperamos/recursoRecurso 22@2x.png";
import img1 from "assets/images/te-esperamos/recursoRecurso 21@2x.png";
import img2 from "assets/images/te-esperamos/recursoRecurso 19@2x.png";

// Footer image
import lief3 from "assets/images/te-esperamos/recursoRecurso 23@2x.png";

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

          <div className="stop--images row">
            <div className="col-md-5">
              <img
                src={firstPhotoMap}
                alt="ana y zorro"
                className="first-photo-map"
              />
            </div>

            <div className="ejemplo col-md-6">
              <div>
                <img
                  src={secondPhotoMap}
                  alt="ana y zorro"
                  className="second-photo-map"
                />
              </div>
              <div>
                <img src={lief} alt="ana y zorro" className="lief" />
              </div>
            </div>
          </div>

          <div className="stop--images">
            <div className="ej col-md-6">
              <div>
                <img src={lief2} alt="ana y zorro" className="lief2" />
              </div>
              <div>
                <img
                  src={thirdPhotoMap}
                  alt="ana y zorro"
                  className="third-photo-map"
                />
              </div>
            </div>

            <div className="col-md-6">
              <img
                src={fourPhotoMap}
                alt="ana y zorro"
                className="four-photo-map"
              />
            </div>
          </div>

          <div className="stop--images row">
            <div className="col-md-4">
              <img
                src={fifthPhotoMap}
                alt="ana y zorro"
                className="fifth-photo-map"
              />
            </div>

            <div className="col-md-6">
              <img
                src={sixthPhotoMap}
                alt="ana y zorro"
                className="sixth-photo-map"
              />
            </div>
          </div>
        </section>
        {/* COMO LLEGAR SECTION END */}
        {/* DRESSCODE SECTION START */}
        <section className="dresscode__container">
          <img src={dressTitle} alt="ine y zorro" width="40%" />
          <div>
            <h2>mujeres</h2>
            <h2 className="text">
              corto o largo ... lo que prefieras
              <br /> ponerte vas a estar bárbara!
            </h2>
            <br />
            <br />
            <h2>hombres</h2>
            <h2 className="text">
              abstenerse de trajes calurosos.
              <br /> Porque ni el novio se lo va a poner!
              <br /> pero no por eso dejes de venir de fiesta
            </h2>
          </div>
          <div className="dress-code--images row">
            <div className="col-md-1">
              <img
                src={dressCodeLief1}
                alt="ine y zorro"
                className="dc-lief1"
              />
              <img
                src={dressCodeImage1}
                alt="ine y zorro"
                className="dc-image1"
              />
            </div>
            <div className="col-md-5">
              <img
                src={dressCodeLief2}
                alt="ine y zorro"
                className="dc-lief2"
              />
              <img
                src={dressCodeImage2}
                alt="ine y zorro"
                className="dc-image2"
              />
            </div>
          </div>
        </section>
        {/* DRESSCODE SECTION END */}

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
          <div className="regalo-images row">
            <div className="col-md-3">
              <img src={giftPhoto1} alt="ine y zorro" className="gift-photo1" />
              <img src={giftPhoto2} alt="ine y zorro" className="gift-photo2" />
            </div>
            <div className="col-md-3">
              <img src={giftPhoto3} alt="ine y zorro" className="gift-photo3" />
              <img src={giftPhoto4} alt="ine y zorro" className="gift-photo4" />
            </div>
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
          <div className="te-esperamos--images row">
            <div className="col-md-3">
              <img src={img1} alt="ine y zorro" className="te-esperamos-img1" />
            </div>
            <div className="col-md-3">
              <img src={img2} alt="ine y zorro" className="te-esperamos-img2" />
            </div>
          </div>
        </section>
        {/* TE ESPERAMOS SECTION END */}

        {/* FOOTER START */}
        <div className="footer">
          <h1>#ineyzorro #18f</h1>
          <div className="footer-image">
            <img src={lief3} alt="ine y zorro" className="lief3" />
          </div>
        </div>
        {/* FOOTER END */}
      </div>
    </LayoutPrimary>
  );
};

export default Home;
