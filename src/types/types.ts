export type Image = {
  id: number;
  ad_id: number;
  url: string;
};
export type User = {
  id: number;
  name?: string;
  email: string;
  city?: string;
  avatar?: string;
  sells_from: string;
  phone?: string;
};
export type TrueFalse = 'false' | 'true';

export type SignInForm = {
  eMail: string;
  password: string;
};

export type SignUpForm = {
  eMail: string;
  password: string;
  repPassword: string;
  name?: string;
  lastName?: string;
  city?: string;
};

export type User_Sys = {
  id: number;
  name?: string;
  email: string;
  city?: string;
  avatar?: string;
  sells_from: string;
  phone?: string;
  role: string;
  surname?: string;
  password?: string;
};

export type EditUserForm = {
  name?: string;
  lastName?: string;
  city?: string;
  phone?: string;
};

export type Ad_Image = {
  id?: number;
  ad_id?: number;
  url?: string;
};

export type Comment = {
  id: number;
  text: string;
  created_on: string;
  author_id: number;
  ad_id: number;
};