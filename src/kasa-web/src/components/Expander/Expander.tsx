import React, { useState } from "react";
import arrow from "../../assets/arrow.svg";
import "./Expander.scss";

type Props = {
  title: string;
  children?: React.ReactNode;
  className?: string;
};

const Expander = ({ title, className, children }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className={"expander " + className}>
      <div className="expander__header" onClick={() => setExpanded(!expanded)}>
        <div className="expander__title">{title}</div>
        <img
          src={arrow}
          alt="arrow"
          className={
            expanded
              ? "expander__arrow expander__arrow_expanded"
              : "expander__arrow"
          }
        />
      </div>

      <div
        className={
          expanded
            ? "expander__content expander__content_expanded"
            : "expander__content"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Expander;
