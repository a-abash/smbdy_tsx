import { Icon } from "../../Icon/Icon";
import "./Success.css";

export function Success(props: { count: number }) {
  const plurals = props.count > 1 ? "s" : "";
  return (
    <div className="Success-root">
      <Icon className="Success-icon" iconName="deposit-status-done" size={72} />
      <h2 className="Success-title">Successful</h2>
      <p className="Success-text">
        You have send invite for <strong>{props.count}</strong> user{plurals}.
      </p>
      <button onClick={() => window.location.reload()} className="Success-button">
        Back
      </button>
    </div>
  );
}
