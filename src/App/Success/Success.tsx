import { Icon } from "../../components/Icon/Icon";
import "./Success.css";

export function Success(props: { count: number }) {
  const s = props.count > 1 ? "s" : "";
  return (
    <div className="Success-root">
      <Icon className="Success-icon" iconName="deposit-status-done" size={72} />
      <h2 className="Success-title">Successful</h2>
      <p className="Success-text">
        You have send invite{s} for <strong>{props.count}</strong> user{s}.
      </p>
      <a href="/" className="Success-button">
        Back
      </a>
    </div>
  );
}
