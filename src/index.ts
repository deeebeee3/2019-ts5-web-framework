import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 });

const id = user.attributes.get('id');
const name = user.attributes.get('name');
const age = user.attributes.get('age');

user.sync.save({ id, name, age });
