import "./Loader.css";
import { Icon } from "../Icon/Icon";

export function Loader() {
  return (
    <div className="Loader-root">
      <Icon className="loader" iconName="clock" size={72} color="coral" />
    </div>
  );
}
