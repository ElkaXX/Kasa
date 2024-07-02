import { Apartment } from "../../api/types";
import ApartmentCard from "../ApartmentCard/ApartmentCard";
import classnames from "classnames";
import "./ApartmentList.scss";
import { NavLink } from "react-router-dom";
import { RoutePath } from "../../routes";

type Props = {
  className?: string;
  apartments: Apartment[];
};

const ApartmentList = ({ className: classNames, apartments }: Props) => {
  const listClass = classnames("apartment-list", classNames);

  const getApartmentRoutePath = (id: string) => {
    return RoutePath.APARTMENT.replace(":id", id);
  };

  return (
    <ul className={listClass}>
      {apartments.map((apartment) => (
        <li key={apartment.id} className="apartment-list__item">
          <NavLink
            className="apartment-list__link"
            to={getApartmentRoutePath(apartment.id)}
          >
            <ApartmentCard
              title={apartment.title}
              location={apartment.location}
              cover={apartment.cover}
            />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default ApartmentList;
