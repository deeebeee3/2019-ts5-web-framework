// import { User } from './models/User';

// const user = new User({ name: 'myname', age: 20 });

// user.on('change', () => { console.log('change #1'); });
// user.on('change', () => { console.log('change #2'); });
// user.on('save', () => { console.log('save #1'); });

// console.log(user);

// user.trigger('change');

import axios from 'axios';

//axios.post('http://localhost:3000/users', { name: 'nyName', adge: 20 });

axios.get('http://localhost:3000/users/1');