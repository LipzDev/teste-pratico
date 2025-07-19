import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectUsers, selectUsersLoading } from "@/store/users/users.selectors";
import { selectIsFavorite } from "@/store/favorites/favorites.selectors";
import { addFavorite, removeFavorite } from "@/store/favorites/favorites.slice";
import { fetchUsersRequest } from "@/store/users/users.slice";
import type { IUser } from "@/types/user";

export const useUserDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userId = id ? parseInt(id, 10) : 0;

  const users = useSelector(selectUsers) as IUser[];
  const usersLoading = useSelector(selectUsersLoading);
  const isFavorite = useSelector(selectIsFavorite(userId));

  const user = users.find((u: IUser) => u.id === userId);

  useEffect(() => {
    if (!id || isNaN(userId)) {
      navigate("/");
      return;
    }

    if (users.length === 0 && !usersLoading) {
      dispatch(fetchUsersRequest());
    }
  }, [id, userId, navigate, users.length, usersLoading, dispatch]);

  const handleBack = () => {
    navigate("/");
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(userId));
    } else {
      dispatch(addFavorite(userId));
    }
  };

  return {
    user,
    isFavorite,
    handleBack,
    handleToggleFavorite,
    loading: usersLoading,
  };
};
