import { PropsWithChildren } from "react";
import "./Container.scss";

const Container = ({ children }: PropsWithChildren) => {
  return <div className="container">{children}</div>;
};

export default Container;
