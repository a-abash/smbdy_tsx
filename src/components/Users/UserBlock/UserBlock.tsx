import { User } from "@/api/User";
import "./UserBlock.css";
import { Icon } from "../../Icon/Icon";

export function UserBlock(props: User) {
  const isInvited = props.isInvited ? "minus" : "plus";
  return (
    <li className="UserBlock-root">
      <img
        className="UserBlock-image"
        src={props.avatar}
        alt={props.first_name}
      />

      <div className="UserBlock-wrap">
        <p className="UserBlock-fullname">
          {props.first_name} {props.last_name}
        </p>
        <a href={`mailto: ${props.email}`} className="UserBlock-link">
          {props.email}
        </a>
      </div>

      <Icon
        onClick={() => props.onClickInvite(props.id)}
        className="UserBlock-icon"
        iconName={isInvited}
        size={19}
      />
    </li>
  );
}
