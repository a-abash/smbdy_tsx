import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//api users - https://reqres.in/api/users

export function useAppUserList() {
  const [invites, setInvites] = useState([0]);
  const [isSuccess, setSuccess] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get("https://reqres.in/api/users"),
    select: (data) => data.data.data,
  });

  useEffect(() => {
    if (isError) {
      console.warn(error);
      alert("U have error!");
    }
  }, [data, isError, error]);

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
  return {
    data,
    invites,
    isLoading,
    isSuccess,
    searchValue,
    handleChange,
    onClickInvite,
    onClickSendInvites,
  };
}
