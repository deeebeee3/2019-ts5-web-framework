import { Model } from './Models';
export interface UserProps {
  //make properties optional
  id?: number,
  name?: string,
  age?: number
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps>{ }
}