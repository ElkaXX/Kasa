import Expander from "../../components/Expander/Expander";
import "./AboutPage.scss";

// const expandersData = [
//   {
//     title: "Fiabilité",
//     content:
//       ,
//   },
//   {
//     title: "Respect",
//   },
//   {
//     title: "Service",
//   },
//   {
//     title: "Sécurité",
//   },
// ];

const AboutPage = () => {
  return (
    <div className="about">
      <div className="about__banner">
        <div className="about__overlay"></div>
      </div>

      <div className="about__wrapper">
        <Expander className="about__expander" title="Fiabilité">
          <div>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            atque, eos deleniti laboriosam quis id omnis expedita dolore et?
            Deserunt aperiam beatae eveniet tenetur error quod magni voluptates
            saepe accusamus."
          </div>
        </Expander>

        <Expander className="about__expander" title="Respect">
          <div>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            atque, eos deleniti laboriosam quis id omnis expedita dolore et?
            Deserunt aperiam beatae eveniet tenetur error quod magni voluptates
            saepe accusamus."
          </div>
        </Expander>

        <Expander className="about__expander" title="Service">
          <div>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            atque, eos deleniti laboriosam quis id omnis expedita dolore et?
            Deserunt aperiam beatae eveniet tenetur error quod magni voluptates
            saepe accusamus."
          </div>
        </Expander>

        <Expander className="about__expander" title="Sécurité">
          <div>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            atque, eos deleniti laboriosam quis id omnis expedita dolore et?
            Deserunt aperiam beatae eveniet tenetur error quod magni voluptates
            saepe accusamus."
          </div>
        </Expander>
      </div>
    </div>
  );
};

export default AboutPage;
