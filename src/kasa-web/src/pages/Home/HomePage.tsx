import Banner from "../../components/Banner/Banner";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home">
      <Banner
        imageSrc="/src/assets/home-banner.jpeg"
        darkLevel={0.6}
        text="Chez vous, partout et ailleurs"
      />
    </div>
  );
};

export default HomePage;
