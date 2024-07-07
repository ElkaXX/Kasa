import star from "../../assets/star.svg";
import classNames from "classnames";
import "./Rating.scss";

type Props = {
  rating: number;
};

const Rating = ({ rating }: Props) => {
  return (
    <div className="rating">
      {Array.from(Array(5).keys()).map((_, index) => (
        <img
          key={index}
          src={star}
          alt="star"
          className={classNames({
            rating__img: true,
            rating__img_active: index < rating,
          })}
        />
      ))}
    </div>
  );
};

export default Rating;
