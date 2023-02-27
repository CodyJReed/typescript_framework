import axios, { AxiosPromise } from "axios";

interface HasId {
    id: number
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/users/${id}`);
    //   .then((res: AxiosResponse): void => this.set(res.data));
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/users/${id}`, data);
    } else {
      return axios.post("${this.rootUrl}/users", data);
    }
  }
}
