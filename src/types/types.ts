export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  gender: string;
  username: string;
  // add other fields if needed
}

export interface UsersResponse {
  users: User[];
  limit: number;
  skip: number;
  total: number;
}
