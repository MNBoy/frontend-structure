export interface IUser {
  fullName: string;
  description: string;
  gender: 'male' | 'female';
  email: string;
  tags: string[];
  emailActive: boolean;
  deleted: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
