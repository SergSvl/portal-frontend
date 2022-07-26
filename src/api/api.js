import * as axios from 'axios';

class ApiRequest {

  basePath = process.env.REACT_APP_BASE_URL;

  instanceAxios = null;

  set token(value) {
    this.instanceAxios.defaults.headers.common['Authorization'] = value;
  }

  get token() {
    return this.instanceAxios.defaults.headers.common['Authorization'];
  }

  createInstance() {
    this.instanceAxios = axios.create({
      withCredentials: true,
      baseURL: this.basePath,
    });
  }

  constructor() {
    this.createInstance();
  }

  createUrl(postfix) {
    return this.basePath + postfix;
  }

  get(url) {
    return this.instanceAxios.get(this.createUrl(url)).then((res) => res.data);
  }

  post(url, body) {
    return this.instanceAxios.post(this.createUrl(url), body).then((res) => res.data);
  }
}

export const apiRequest = new ApiRequest();
