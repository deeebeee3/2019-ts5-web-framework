import { Eventing } from './Eventing';
import { Sync } from './Sync';
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

  //an interface is a type - using an interface to describe an object
  constructor(private data: UserProps) { }

  get(propName: string): (number | string) {
    return this.data[propName];
  }

  //argument can be an object that can contain a name as a string or an age as a number
  //set(update: { name: string; age: number }): void {
  //but we'll use an interface instead
  set(update: UserProps): void {
    //overwrite data with all the properties and values of update
    Object.assign(this.data, update);
  }




}