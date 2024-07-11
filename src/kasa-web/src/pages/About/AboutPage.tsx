import Banner from "../../components/Banner/Banner";
import Expander from "../../components/Expander/Expander";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about">
      <Banner imageSrc="/src/assets/about-banner.jpeg" darkLevel={0.3}/>

      <div className="about__wrapper">
        <Expander className="about__expander" title="Fiabilité">
          <div>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
            et toutes les informations sont régulièrement vérifiées par nos équipes.
          </div>
        </Expander>

        <Expander className="about__expander" title="Respect">
          <div>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou
             de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </div>
        </Expander>

        <Expander className="about__expander" title="Service">
          <div>
            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
            N'hésitez pas à nous contacter si vous avez la moindre question.
          </div>
        </Expander>

        <Expander className="about__expander" title="Sécurité">
          <div>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement 
            correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, 
            cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur
            la sécurité domestique pour nos hôtes.
          </div>
        </Expander>
      </div>
    </div>
  );
};

export default AboutPage;
