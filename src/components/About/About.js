import "./About.css";
import autorImage from "../../images/autor.jpg";

export default function About() {
  return (
    <section className="about">
      <img className="about__image" src={autorImage} alt="autor" />
      <div className="about__text-box">
        <h1 className="about__title">Autor</h1>
        <p className="about__subtitle">Desarrollo web, Practicum 2023.</p>
        <p className="about__description">
          Músico autodidacta, luthier de oficio y programador en formación
          constante, se destaca por su gran capacidad de aprendizaje en el
          ámbito artístico y tecnológico. Entusiasta de la informática y
          tecnologías web, ha programado proyectos personales en Python y
          Javascript. Originario del sur de Chile, específicamente en las
          tierras volcánicas de Villarrica, mantiene un gran interés por las
          culturas y tradiciones del mundo celta, estilo sobre el cual basa sus
          creaciones que van desde composiciones musicales a mundos de
          videojuegos.
        </p>
      </div>
    </section>
  );
}
