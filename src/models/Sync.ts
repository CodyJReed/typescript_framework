import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";

export class Sync {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/users/${id}`);
    //   .then((res: AxiosResponse): void => this.set(res.data));
  }

  save(data: UserProps): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/users/${id}`, data);
    } else {
      return axios.post("${this.rootUrl}/users", data);
    }
  }
}
