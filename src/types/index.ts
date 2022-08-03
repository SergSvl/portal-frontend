export interface IUser {
  id: number;
  email: string;
  username: string;
  isAdmin: false;
  token: string;
  tokenName: string;
}

export interface ILogin {
  login: string;
  password: string;
  remember: boolean;
  tokenName?: string;
}

export interface IConfigRequestData {
  tableName: string;
  tokenName: string;
  where: any;
}

export interface IConfigResponseData {
  get: [];
  method: string;
}

export interface HomeButtonProps {
  // data: {
    title: string;
    image: string;
    link: string;
    url: string;
    isActive: boolean;
  // }
}