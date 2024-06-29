import "./Banner.scss";

type Props = {
  imageSrc: string;
  text?: string;
};

const Banner = ({ imageSrc, text }: Props) => {
  const url = `url(${imageSrc})`;

  return (
    <div className="banner" style={{ backgroundImage: url }}>
      <div className="banner__overlay">
        {text ? <div className="banner__text">{text}</div> : null}
      </div>
    </div>
  );
};

export default Banner;
