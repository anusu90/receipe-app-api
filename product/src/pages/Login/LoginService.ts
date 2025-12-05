import { client } from "../../apiClient/client";

type LoginArgs = {
  email: string;
  password: string;
};

type LoginData = {
  access: string | null;
  refresh: string | null;
};

export function login(args: LoginArgs) {
  return client<LoginData, LoginArgs>({
    url: "/user/token/",
    method: "POST",
    payload: args,
  });
}
