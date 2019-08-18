import { Model } from './Models';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
export interface UserProps {
  //make properties optional
  id?: number,
  name?: string,
  age?: number
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps>{
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }
}

const user = User.buildUser({});
user.get('id');
user.get('name');
user.get('age');
user.save();
user.fetch();