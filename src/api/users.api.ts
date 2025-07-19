import type { IUser } from "@/types/user";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async (): Promise<IUser[]> => {
  const response = await fetch(`${API_BASE_URL}/users`);

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.statusText}`);
  }

  return response.json();
};
