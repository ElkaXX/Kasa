import { Host } from "../../api/types";
import "./ApartmentHost.scss";

type Props = {
  host: Host;
};

const ApartmentHost = ({ host }: Props) => {
  return (
    <div className="apartment-host">
      <div className="apartment-host__name">{host.name}</div>
      <img className="apartment-host__picture" src={host.picture} alt="host picture" />
    </div>
  );
};

export default ApartmentHost;
