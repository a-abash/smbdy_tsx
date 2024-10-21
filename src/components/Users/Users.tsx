import "./Users.css";
import { UserBlock } from "./UserBlock/UserBlock";
import { User } from "@/api/User";
import { Loader } from "../Loader/Loader";

type UsersProps = {
  users: User[];
  searchValue: string;
  invites: number[];
  onClickInvite: (id: number) => void;
  isLoading: boolean;
};

export function Users(props: UsersProps) {
  const lowercaseSearchValue = props.searchValue.toLowerCase();

  if (props.isLoading) {
    return <Loader />;
  }

  return (
    <ul className="Users-root">
      {props.users
        .filter((user) => {
          const fullname = (user.first_name + user.last_name).toLowerCase();
          const lowercaseFullname = fullname;
          const lowercaseUseremail = user.email;
          return (
            lowercaseFullname.includes(lowercaseSearchValue) ||
            lowercaseUseremail.includes(lowercaseSearchValue)
          );
        })
        .map((user: User) => {
          return (
            <UserBlock
              key={user.id}
              {...user}
              onClickInvite={props.onClickInvite}
              isInvited={props.invites.includes(user.id)}
            />
          );
        })}
    </ul>
  );
}
