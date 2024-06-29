import React, { useState } from "react";
import arrow from "../../assets/arrow.svg";
import classes from "classnames";
import "./Expander.scss";

type Props = {
  title: string;
  children?: React.ReactNode;
  className?: string;
};

const Expander = ({ title, className, children }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const arrowClass = classes({
    expander__arrow: true,
    expander__arrow_expanded: expanded,
  });

  const contentClass = classes({
    expander__content: true,
    expander__content_expanded: expanded,
  });

  return (
    <div className={"expander " + className}>
      <div className="expander__header" onClick={() => setExpanded(!expanded)}>
        <div className="expander__title">{title}</div>
        <img src={arrow} alt="arrow" className={arrowClass} />
      </div>

      <div className={contentClass}>{children}</div>
    </div>
  );
};

export default Expander;
