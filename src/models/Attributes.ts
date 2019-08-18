export class Attributes<T>{
  //an interface is a type - using an interface to describe an object
  constructor(private data: T) { }

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }

  //argument can be an object that can contain a name as a string or an age as a number
  //set(update: { name: string; age: number }): void {
  //but we'll use an interface instead
  set(update: T): void {
    //overwrite data with all the properties and values of update
    Object.assign(this.data, update);
  }
}