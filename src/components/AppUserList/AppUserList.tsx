import "./AppUserList.css";
import { Users } from "../Users/Users";
import { Search } from "../Search/Search";
import { Success } from "./Success/Success";
import { useAppUserList } from "./useAppUserList";

export function AppUserList() {
  const {
    data,
    invites,
    isLoading,
    isSuccess,
    searchValue,
    handleChange,
    onClickInvite,
    onClickSendInvites,
  } = useAppUserList();

  return (
    <div className="UsersList-root">
      <div className="UsersList-wrap">
        <Search searchValue={searchValue} handleChange={handleChange} />

        {isSuccess ? (
          <Success count={invites.length - 1} />
        ) : (
          <>
            <Users
              users={data}
              searchValue={searchValue}
              invites={invites}
              onClickInvite={onClickInvite}
              isLoading={isLoading}
            />

            {invites.length - 1 > 0 ? (
              <button onClick={onClickSendInvites} className="UsersList-button">
                Send
              </button>
            ) : (
              <p className="UsersList-text">
                Select user by <strong>+</strong> for send invite.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
