import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.on('change', () => { console.log('change #1'); });
user.on('change', () => { console.log('change #2'); });
user.on('save', () => { console.log('save #1'); });

console.log(user);

user.trigger('change');

