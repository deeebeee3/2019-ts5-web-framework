import axios, { AxiosPromise } from 'axios';
import { UserProps, User } from './User';

export class Sync<T>{
  constructor(public rootUrl: string) {

  }

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: UserProps): AxiosPromise {
    const { id } = data;

    if (id) {
      //put
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      //post
      return axios.post(this.rootUrl, data);
    }
  }
}