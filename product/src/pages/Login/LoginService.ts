import axios from "axios";

type LoginArgs = {
  email: string;
  password: string;
};

type LoginData = {
  token: string | null;
};

export function login(args: LoginArgs) {
  return axios.post<LoginData>("http://localhost:8000/api/user/token/", args);
}
