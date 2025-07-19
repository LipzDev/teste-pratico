import type { IUser } from "@/types/user";

// Eu decidi manter aqui mesmo a API pública, pois é uma API pública e não vejo necessidade de criar um .ENV para isso...
const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async (): Promise<IUser[]> => {
  const response = await fetch(`${API_BASE_URL}/users`);

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.statusText}`);
  }

  return response.json();
};
