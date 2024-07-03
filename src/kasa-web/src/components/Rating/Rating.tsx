import star from "../../assets/star.svg";
import "./Rating.scss";

type Props = {
  rating: number;
};

const Rating = ({ rating }: Props) => {
  return (
    <div className="rating">
      {Array.from(Array(5).keys()).map((_, index) => (
        <img src={star} alt="star" className="rating__img" />
      ))}
    </div>
  );
};

export default Rating;
