import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class Sync<T extends HasId>{
  constructor(public rootUrl: string) { }

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    //ts won't know what type id is unless we use a generic constraint (extends HasId)
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