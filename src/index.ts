import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 });

//we are getting back a reference to the on method on the Eventing class
const on = user.on;

on('change', () => {
  console.log('user was changed');
});