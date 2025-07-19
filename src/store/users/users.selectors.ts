import type { RootState } from "@/store";

export const selectUsers = (state: RootState) => state.users.data;
export const selectUsersLoading = (state: RootState) => state.users.loading;
export const selectUsersError = (state: RootState) => state.users.error;
