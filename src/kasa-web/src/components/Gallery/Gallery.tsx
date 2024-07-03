import forwardArrow from "../../assets/arrow_forward.svg";
import backwardArrow from "../../assets/arrow_backward.svg";
import { useState } from "react";
import "./Gallery.scss";

type Props = {
  pictures: string[];
};

const Gallery = ({ pictures }: Props) => {
  const [pictureIndex, setPictureIndex] = useState<number>(0);

  const movePrevious = () => {
    const previousIndex = pictureIndex - 1;

    if (previousIndex < 0) {
      setPictureIndex(pictures.length - 1);
    } else {
      setPictureIndex(previousIndex);
    }
  };

  const moveNext = () => {
    const nextIndex = pictureIndex + 1;

    if (nextIndex == pictures.length) {
      setPictureIndex(0);
    } else {
      setPictureIndex(nextIndex);
    }
  };

  const picture = pictures[pictureIndex];

  return (
    <div className="gallery">
      <img src={picture} alt="picture" className="gallery__picture" />
      <button
        className="gallery__button gallery__button_left"
        onClick={movePrevious}
      >
        <img
          src={backwardArrow}
          alt="backward arrow"
          className="gallery__arrow"
        />
      </button>
      <button
        className="gallery__button gallery__button_right"
        onClick={moveNext}
      >
        <img
          src={forwardArrow}
          alt="forward arrow"
          className="gallery__arrow"
        />
      </button>
    </div>
  );
};

export default Gallery;
