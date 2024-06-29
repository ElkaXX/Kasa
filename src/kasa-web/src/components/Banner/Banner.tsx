import "./Banner.scss";

type Props = {
  imageSrc: string;
  darkLevel: number;
  text?: string;
};

const Banner = ({ imageSrc, text, darkLevel }: Props) => {
  const url = `url(${imageSrc})`;
  const color = `rgba(0,0,0,${darkLevel})`;

  return (
    <div className="banner" style={{ backgroundImage: url }}>
      <div className="banner__overlay" style={{ backgroundColor: color }}>
        {text ? <div className="banner__text">{text}</div> : null}
      </div>
    </div>
  );
};

export default Banner;
