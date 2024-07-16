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
import Expander from "../../components/Expander/Expander";
import NotFoundPage from "../NotFound/NotFoundPage";

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
    return (<><NotFoundPage/></>);
  }

  return (
    <div className="apartment">
      <Gallery pictures={apartment.pictures} />

      <div className="apartment__content">
        <div className="apartment__first">
          <ApartmentDetails
            className="apartment__details"
            title={apartment.title}
            location={apartment.location}
          />
          <TagList className="apartment__tag-list" tags={apartment.tags} />
        </div>

        <div className="apartment__second">
          <Rating rating={+apartment.rating} />
          <ApartmentHost host={apartment.host} />
        </div>
      </div>

      <div className="apartment__third">
        <Expander className="apartment__expander" title="Description">
          <div className="apartment__description">{apartment.description}</div>
        </Expander>
        <Expander className="apartment__expander" title="Équipements">
          <ul className="apartment__equipments">
            {apartment.equipments.map((equipment) => (
              <li key={equipment} className="apartment__equipment">
                {equipment}
              </li>
            ))}
          </ul>
        </Expander>
      </div>
    </div>
  );
};

export default ApartmentPage;
