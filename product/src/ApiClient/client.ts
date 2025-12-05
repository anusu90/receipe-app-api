import axios, {
  type AxiosRequestConfig,
  type Method,
  type RawAxiosRequestHeaders,
} from "axios";
import { useAuthStore } from "../stores/authStore";

interface ApiClientConfig<G>
  extends Pick<AxiosRequestConfig<G>, "url" | "headers"> {
  isAuthRequired?: boolean;
  payload?: G;
  method?: Method;
}

export const client = async <T, G>({
  url,
  isAuthRequired = true,
  method = "GET",
  payload,
}: ApiClientConfig<G>) => {
  const headers: RawAxiosRequestHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (isAuthRequired) {
    headers.Authorization = `Bearer ${useAuthStore
      .getState()
      .getAccessToken()}`;
  }

  try {
    const response = await axios.request<T>({
      baseURL: "http://localhost:8000/api",
      url,
      method,
      headers,
      data: payload,
    });

    return response.data;
  } catch (error) {
    const isAxiosError = axios.isAxiosError(error);

    if (isAxiosError) {
      console.log(error);
    } else {
      console.log(error);
    }
  }
};
