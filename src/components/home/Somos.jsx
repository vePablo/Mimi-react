import SomosBanner from "../../../public/img/home/somos-banner.jpeg";
import SomosBanner2 from "../../../public/img/home/somos-banner2.jpeg";
import "./Somos.css";

const Somos = () => {
  return (
    <>
      <section className="light">
        <div className="container py-2">
          <div className="h1 text-center text-dark" id="pageHeaderTitle">
            Nosotros
          </div>

          <article className="postcard light blue">
            <figure className="postcard__img_link">
              <img
                className="postcard__img"
                src={SomosBanner}
                alt="Un grupo de personas trabajando"
              />
            </figure>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title blue">
                <a href="#">Bienvenidos</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                <p>Bienvenido a Soy Mimi, donde la creatividad y la elegancia se
                fusionan para dar vida a tus ideas en papel. En el corazón de
                nuestro compromiso está el arte de transformar lo ordinario en
                extraordinario, desde tarjetas de presentación hasta agendas
                personalizadas y más.</p>
                <p>En Soy Mimi, entendemos que cada detalle
                cuenta. Ya sea para tu uso personal o para potenciar la imagen
                de tu marca en el competitivo mercado, estamos aquí para
                acompañarte en cada paso del camino.</p>
                <p> Nuestro equipo de
                talentosos diseñadores se dedica apasionadamente a plasmar tu
                visión en cada pieza, asegurando que cada producto sea una
                expresión única de tu estilo y personalidad.</p>
              </div>
            </div>
          </article>
          <article className="postcard light red">
            <figure className="postcard__img_link">
              <img
                className="postcard__img"
                src={SomosBanner2}
                alt="Paleta de colores"
              />
            </figure>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title red">
                <a href="#">En Soy mimi</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                <p>Con una combinación de innovación y atención al detalle, nos
                esforzamos por superar tus expectativas y brindarte soluciones
                que destacan en un mar de opciones.</p>
                <p>Desde el diseño inicial
                hasta el producto final, cada fase de nuestro proceso está
                impregnada de calidad y dedicación.
                En Soy Mimi, no solo creamos
                productos; creamos conexiones duraderas. Estamos aquí para
                convertir tus sueños en realidad y ayudarte a destacar en un
                mundo donde la primera impresión es crucial. Únete a nosotros en
                este viaje creativo y descubre cómo juntos podemos hacer que tu
                marca brille. ¡Gracias por elegir Soy Mimi, donde tu imaginación
                cobra vida en cada detalle!</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Somos;
