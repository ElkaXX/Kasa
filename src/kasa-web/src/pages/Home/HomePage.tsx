import { useEffect, useState } from "react";
import { Apartment } from "../../api/types";
import Banner from "../../components/Banner/Banner";
import ApartmentList from "../../components/ApartmentList/ApartmentList";
import "./HomePage.scss";
import client from "../../api/client";

const HomePage = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect(() => {
    client.getApartmentsAsync().then((data) => setApartments(data));
  }, []);

  return (
    <div className="home">
      <Banner
        imageSrc="/src/assets/home-banner.jpeg"
        darkLevel={0.6}
        text="Chez vous, partout et ailleurs"
      />

      {apartments.length ? (
        <ApartmentList className="home__list" apartments={apartments} />
      ) : null}
    </div>
  );
};

export default HomePage;
