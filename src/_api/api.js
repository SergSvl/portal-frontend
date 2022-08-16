import * as axios from "axios";

class ApiRequest {
  basePath = process.env.REACT_APP_BASE_API_URL;

  instanceAxios = null;

  set token(value) {
    this.instanceAxios.defaults.headers.common["Authorization"] = value;
  }

  get token() {
    return this.instanceAxios.defaults.headers.common["Authorization"];
  }

  createInstance() {
    this.instanceAxios = axios.create({
      withCredentials: true,
      baseURL: this.basePath
    });
  }

  constructor() {
    this.createInstance();
  }

  createUrl(postfix) {
    console.log("API URL:", this.basePath + postfix);

    return this.basePath + postfix;
  }

  get(url) {
    return this.instanceAxios.get(this.createUrl(url)).then((res) => res.data);
  }

  post(url, body, headers = {}) {
    return this.instanceAxios
      .post(this.createUrl(url), body, headers)
      .then((res) => res.data);
  }
}

export const apiRequest = new ApiRequest();
