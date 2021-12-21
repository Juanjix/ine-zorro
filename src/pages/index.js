// React
import React, { useEffect, useState } from "react";

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
import sixthPhotoMap from "assets/images/como-llegar/recursoRecurso 2@2x.png";

// Imagenes section dresscode
import dressTitle from "assets/images/dresscode/recursoRecurso 5@2x.png";
import dressCodeImage1 from "assets/images/dresscode/recursoRecurso 4@2x.png";
import dressCodeLief1 from "assets/images/dresscode/recursoRecurso 1@2x.png";
import dressCodeImage2 from "assets/images/dresscode/recursoRecurso 10@2x.png";
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

import Aos from "aos";
import "aos/dist/aos";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000, // values from 0 to 3000, with step 50ms
    });
  });

  const [faltanDias, setFaltanDias] = useState();

  const diasHasta = (final) => {
    var Hoy = new Date();

    var fin = new Date(final.año, final.mes, final.dia);

    var mseg_dia = 1000 * 60 * 60 * 24;

    var dias;

    if (Hoy.getMonth() === final.mes && Hoy.getDate() > final.dia)
      fin.setFullYear(fin.getFullYear() + 1);

    dias = Math.ceil((fin.getTime() - Hoy.getTime()) / mseg_dia);
    setFaltanDias(dias);
  };

  useEffect(() => {
    diasHasta({ año: 2022, mes: 1, dia: 18 });
  }, []);

  return (
    <LayoutPrimary>
      <div className="home__container">
        {/* INICIO SECTION START */}
        <section className="hero" id="inicio">
          <h3 className="cuenta-regresiva">
            {faltanDias} días para dejarlo todo
          </h3>
          <img src={image} alt="ine y zorro" className="first--title" />
          <div className="fecha--hora">
            <h1>18 . 02 . 2022</h1>
            <h1> | 17 HS | </h1>
          </div>

          <div className="direccion">
            <img
              src={logoHerencia}
              alt="ine y zorro"
              className="logo-herencia"
            />
            <h1>LA HERENCIA</h1>
            <h4>SARAVI 1799, PILAR</h4>
          </div>
        </section>

        {/* INICIO SECTION END */}

        {/* COMO LLEGAR SECTION START */}
        <section className="ubicacion__container" id="ubicacion">
          <img src={secondTitle} alt="ana y zorro" className="second--title" />

          <div className="mapa">
            <img src={mapa} alt="ana y zorro" data-aos="fade-in" />
          </div>

          <div className="stop--images">
            <div>
              <img
                src={firstPhotoMap}
                alt="ana y zorro"
                className="first-photo-map"
                data-aos="fade-right"
                width="40%"
              />
            </div>

            <div className="cs-hotel-section">
              <div>
                <img
                  src={secondPhotoMap}
                  alt="ana y zorro"
                  className="second-photo-map"
                  data-aos="fade-left"
                  width="40%"
                />
              </div>
              <div>
                <img
                  src={lief}
                  alt="ana y zorro"
                  className="lief"
                  data-aos="fade-left"
                  width="20%"
                />
              </div>
            </div>
          </div>

          <div className="stop--images">
            <div className="ej">
              <div>
                <img
                  src={thirdPhotoMap}
                  alt="ana y zorro"
                  className="third-photo-map"
                  data-aos="fade-right"
                  width="30%"
                />
              </div>
              <div>
                <img
                  src={lief2}
                  alt="ana y zorro"
                  className="lief2"
                  data-aos="fade-right"
                  width="15%"
                />
              </div>
            </div>

            <div data-aos="fade-left">
              <img
                src={fourPhotoMap}
                alt="ana y zorro"
                className="four-photo-map"
                data-aos="fade-left"
                width="40%"
              />
            </div>
          </div>

          <div className="stop--images">
            <div>
              <img
                src={fifthPhotoMap}
                alt="ana y zorro"
                className="fifth-photo-map"
                data-aos="fade-right"
                width="40%"
              />
            </div>

            <div>
              <img
                src={sixthPhotoMap}
                alt="ana y zorro"
                className="sixth-photo-map"
                data-aos="fade-left"
                width="40%"
              />
            </div>
          </div>
        </section>
        {/* COMO LLEGAR SECTION END */}
        {/* DRESSCODE SECTION START */}
        <section className="dresscode__container" id="dresscode">
          <img
            src={dressTitle}
            alt="ine y zorro"
            width="40%"
            data-aos="fade-in"
          />
          <div className="text-dresscode">
            <h2>mujeres</h2>
            <h2 className="text">
              corto o largo... lo que prefieras
              <br /> ponerte vas a estar bárbara!
            </h2>
            <br />
            <br />
            <h2>hombres</h2>
            <h2 className="text2">
              abstenerse de trajes calurosos.
              <br /> Porque ni el novio
              <br /> se lo va a poner!
              <br /> pero no por eso dejes
              <br /> de venir de fiesta
            </h2>
          </div>
          <div className="images-mobile">
            <div>
              <div>
                <img
                  src={dressCodeImage1}
                  alt="ine y zorro"
                  className="dc-image1"
                  data-aos="fade-right"
                  width="40%"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src={dressCodeImage2}
                  alt="ine y zorro"
                  className="dc-image2"
                  data-aos="fade-left"
                  width="40%"
                />
              </div>
            </div>
          </div>
          <div className="dress-code--images row">
            <div className="col-md-1">
              <div>
                <img
                  src={dressCodeLief1}
                  alt="ine y zorro"
                  className="dc-lief1"
                  data-aos="fade-right"
                />
              </div>
              <div>
                <img
                  src={dressCodeImage1}
                  alt="ine y zorro"
                  className="dc-image1"
                  data-aos="fade-right"
                />
              </div>
            </div>
            <div className="col-md-5">
              <div>
                <img
                  src={dressCodeLief2}
                  alt="ine y zorro"
                  className="dc-lief2"
                  data-aos="fade-left"
                />
              </div>

              <div>
                <img
                  src={dressCodeImage2}
                  alt="ine y zorro"
                  className="dc-image2"
                  data-aos="fade-left"
                />
              </div>
            </div>
          </div>
        </section>
        {/* DRESSCODE SECTION END */}

        {/* REGALOS SECTION START */}
        <section className="regalos__container" id="regalos">
          <img src={thirdTitle} alt="ana y zorro" className="third--title" />
          <img
            src={travelPhoto}
            alt="ine y zorro"
            className="travel--photo"
            data-aos="fade-in"
          />
          <div className="como-regalar">
            <h2>
              CUALQUIER REGALO
              <br /> QUE RECIBAMOS LO VAMOS
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
              <img
                src={giftPhoto1}
                alt="ine y zorro"
                className="gift-photo1"
                data-aos="fade-right"
              />
              <img
                src={giftPhoto2}
                alt="ine y zorro"
                className="gift-photo2"
                data-aos="fade-right"
              />
            </div>
            <div className="col-md-3">
              <img
                src={giftPhoto3}
                alt="ine y zorro"
                className="gift-photo3"
                data-aos="fade-left"
              />
              <img
                src={giftPhoto4}
                alt="ine y zorro"
                className="gift-photo4"
                data-aos="fade-left"
              />
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
          <img
            src={cheersImage}
            alt="ana y zorro"
            className="cheers"
            data-aos="fade-in"
          />

          <div>
            <h2>por favor confirmá tu asistencia</h2>
            <h2>+54 9 11 6451 - 4123</h2>
          </div>
          <div className="te-esperamos--images row">
            <div className="col-md-3">
              <img
                src={img1}
                alt="ine y zorro"
                className="te-esperamos-img1"
                data-aos="fade-right"
              />
            </div>
            <div className="col-md-3">
              <img
                src={img2}
                alt="ine y zorro"
                className="te-esperamos-img2"
                data-aos="fade-left"
              />
            </div>
          </div>
        </section>
        {/* TE ESPERAMOS SECTION END */}

        {/* FOOTER START */}
        <div className="footer">
          <h1>#ineyzorro #18f</h1>
          <div className="footer-image">
            <img
              src={lief3}
              alt="ine y zorro"
              className="lief3"
              data-aos="fade-left"
            />
          </div>
        </div>
        {/* FOOTER END */}
      </div>
    </LayoutPrimary>
  );
};

export default Home;
