import { setup } from "axios-cache-adapter";

import type { AxiosInstance, AxiosRequestConfig } from "axios";

class Http {
  protected http: AxiosInstance;

  constructor() {
    this.http = setup({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    });
  }

  public async get<R>(
    route: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return (await this.http.get(`${route}`, config)).data;
  }

  public async post<T, R>(
    route: string,
    data: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return (await this.http.post(`${route}`, data, config)).data;
  }

  public async put<T, R>(route: string, data: T): Promise<R> {
    return (await this.http.put(`${route}`, data)).data;
  }

  public async delete<R>(route: string): Promise<R> {
    return (await this.http.delete(`${route}`)).data;
  }
}

export default new Http()
