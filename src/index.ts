import { User } from './models/User';

const user = new User({ id: 1 });

user.fetch();

//hack
setTimeout(() => {
  console.log(user);
}, 4000)