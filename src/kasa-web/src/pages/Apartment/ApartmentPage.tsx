import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Apartment } from "../../api/types";
import { RoutePath } from "../../routes";
import client from "../../api/client";
import Gallery from "../../components/Gallery/Gallery";
import "./ApartmentPage.scss";
import ApartmentDetails from "../../components/ApartmentDetails/ApartmentDetails";
import ApartmentHost from "../../components/ApartmentHost/ApartmentHost";
import TagList from "../../components/TagList/TagList";
import Rating from "../../components/Rating/Rating";

const ApartmentPage = () => {
  const [apartment, setApartment] = useState<Apartment | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate(RoutePath.NOT_FOUND);
      return;
    }

    client
      .getApartmentAsync(id)
      .then((data) => setApartment(data))
      .catch((error) => {
        console.log(error);
        navigate(RoutePath.NOT_FOUND);
      });
  }, [id, navigate]);

  if (!apartment) {
    return "Loading...";
  }

  return (
    <div className="apartment">
      <Gallery pictures={apartment.pictures} />
      <ApartmentDetails title={apartment.title} location={apartment.location} />
      <TagList tags={apartment.tags} />
      <ApartmentHost host={apartment.host} />
      <Rating rating={+apartment.rating} />
    </div>
  );
};

export default ApartmentPage;
