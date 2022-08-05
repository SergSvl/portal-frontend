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

export interface HomeButtonProps {
  title: string;
  image: string;
  link: string;
  get: string;
  post: string;
  isActive: boolean;
}

export interface ApiError {
  error: any;
}