import type { UsersResponse } from "../types/types";

export const fetchUsers = async (page: number): Promise<UsersResponse> => {
  const limit = 20;
  const skip = (page - 1) * limit;
  const res = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);
  
  console.log('\n\npage', page,'fetched');
  
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};
