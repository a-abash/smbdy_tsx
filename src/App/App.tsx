import "./App.css";
import { useEffect, useState } from "react";
import { Users } from "../components/Users/Users";
import { Search } from "../components/Search/Search";
import { Loader } from "../components/Loader/Loader";
import { Success } from "./Success/Success";

//api users - https://reqres.in/api/users

export function App() {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([0]);
  const [isLoading, setLoading] = useState(true);
  const [isSuccess, setSuccess] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://reqres.in/api/users").then((res) =>
      res
        .json()
        .then((json) => {
          setUsers(json.data);
        })
        .catch((error) => {
          console.warn(error);
          alert("U have error!");
        })
        .finally(() => setLoading(false))
    );
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  function onClickInvite(id: number) {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  }

  function onClickSendInvites() {
    setSuccess(true);
  }

  return (
    <div className="App-root">
      <div className="App-wrap">
        <Search searchValue={searchValue} handleChange={handleChange} />

        {isLoading ? (
          <Loader />
        ) : isSuccess ? (
          <Success count={invites.length - 1} />
        ) : (
          <>
            <Users
              users={users}
              searchValue={searchValue}
              invites={invites}
              onClickInvite={onClickInvite}
            />

            {invites.length - 1 > 0 && (
              <button onClick={onClickSendInvites} className="App-button">
                Send
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
