export interface IUser {
  id: number;
  email: string;
  username: string;
  isAdmin: false;
  token: string;
  tokenName: string;
  password: string;
}

export interface ILogin {
  login: string;
  password: string;
  remember: boolean;
  tokenName?: string;
}

export interface IConfigRequestData {
  tokenName: string;
  tableName?: string;
  where?: any;
}

export interface IConfigResponseData {
  get: [];
  method: string;
}

export interface IHomeButtonProps {
  id: string;
  title: string;
  image: string;
  link: string;
  get: string;
  post: string;
  isActive: boolean;
  public: boolean;
}

export interface IApiError {
  error: any;
}

export interface IRightsResponse {
  data: {
    get: [];
    method: string;
  }
  status: boolean;
}

export interface IAllRights {
  [key: string]: any;
}

export interface IRight {
  id: string;
  right: string;
  users: [];
}

export interface ITask {
  id: string;
  task: string;
  description: string;
  rights: string;
}