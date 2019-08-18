import axios, { AxiosResponse } from 'axios';
interface UserProps {
  //make properties optional
  id?: number,
  name?: string,
  age?: number
}

//this is a type alias - a type alias for a function type
//the func will not return an object but void
type Callback = () => void;

export class User {
  //all the keys of this object will be strings
  //the value of each of those keys is going to be an array of Callback functions
  //finally initialise events property as an empty object
  events: { [key: string]: Callback[] } = {}

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

  //use a type alias instead of a inline type function annotation
  //on(eventName: string, callback: () => void) {
  on(eventName: string, callback: Callback): void {
    //this.events[eventName] //Callback[] //undefined, will be undefined when we first create a user so...

    const handlers = this.events[eventName] || []; //handlers is now guaranteed to be an array
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    });
  }

  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }


}