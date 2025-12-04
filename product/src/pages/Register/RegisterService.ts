import axios from "axios";

type RegisterArgs = {
  email: string;
  password: string;
  name: string;
};

export function register(args: RegisterArgs) {
  return axios.post("http://localhost:8000/api/user/create/", args);
}
