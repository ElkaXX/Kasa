import { useEffect, useState } from "react";
import { Apartment } from "../../api/types";
import ApiClient from "../../api/client";
import Banner from "../../components/Banner/Banner";
import ApartmentList from "../../components/ApartmentList/ApartmentList";
import "./HomePage.scss";

const HomePage = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect(() => {
    ApiClient.getApartmentsAsync().then((data) => setApartments(data));
  }, []);

  return (
    <div className="home">
      <Banner
        imageSrc="/src/assets/home-banner.jpeg"
        darkLevel={0.6}
        text="Chez vous, partout et ailleurs"
      />

      {apartments.length ? <ApartmentList classNames="home__list" apartments={apartments} /> : null}
    </div>
  );
};

export default HomePage;
