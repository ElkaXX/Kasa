import { Apartment } from "../../api/types";
import ApartmentCard from "../ApartmentCard/ApartmentCard";
import classes from "classnames";
import "./ApartmentList.scss";

type Props = {
  classNames?: string;
  apartments: Apartment[];
};

const ApartmentList = ({ classNames, apartments }: Props) => {
  const listClass = classes("apartment-list", classNames);

  return (
    <ul className={listClass}>
      {apartments.map((apartment) => (
        <li key={apartment.id} className="apartment-list__item">
          <ApartmentCard
            title={apartment.title}
            location={apartment.location}
            cover={apartment.cover}
          />
        </li>
      ))}
    </ul>
  );
};

export default ApartmentList;
