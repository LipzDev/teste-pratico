import { createSlice, createAction } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "@/types/user";

interface UsersState {
  data: IUser[];
  loading: boolean;
  error?: string;
}

const initialState: UsersState = {
  data: [],
  loading: false,
  error: undefined,
};

export const fetchUsersRequest = createAction("users/fetchUsersRequest");
export const fetchUsersSuccess = createAction<IUser[]>(
  "users/fetchUsersSuccess",
);
export const fetchUsersFailure = createAction<string>(
  "users/fetchUsersFailure",
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersRequest, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchUsersSuccess, (state, action: PayloadAction<IUser[]>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = undefined;
      })
      .addCase(fetchUsersFailure, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
