import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
export interface UserProps {
  //make properties optional
  id?: number,
  name?: string,
  age?: number
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing(); //probably won't want to swap this out
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl); // might want to swap this out...
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

}