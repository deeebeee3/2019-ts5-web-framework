//this is a type alias - a type alias for a function type
//the func will not return an object but void
type Callback = () => void;

export class Eventing {
  //all the keys of this object will be strings
  //the value of each of those keys is going to be an array of Callback functions
  //finally initialise events property as an empty object
  events: { [key: string]: Callback[] } = {}

  //use a type alias instead of a inline type function annotation
  //on(eventName: string, callback: () => void) {
  on = (eventName: string, callback: Callback): void => {
    //this.events[eventName] //Callback[] //undefined, will be undefined when we first create a user so...

    const handlers = this.events[eventName] || []; //handlers is now guaranteed to be an array
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    });
  }
}