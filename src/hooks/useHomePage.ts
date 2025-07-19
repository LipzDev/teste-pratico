import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest } from "@/store/users/users.slice";
import {
  selectUsers,
  selectUsersLoading,
  selectUsersError,
} from "@/store/users/users.selectors";
import type { IUser } from "@/types/user";

export const useHomePage = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const loading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (users.length === 0 && !loading && !error) {
      dispatch(fetchUsersRequest());
    }
  }, [dispatch, users.length, loading, error]);

  const handleRetry = () => {
    dispatch(fetchUsersRequest());
  };

  const filteredUsers = users.filter((user: IUser) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return {
    users,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    handleRetry,
    filteredUsers,
  };
};
