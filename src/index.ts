import { UserForm } from './views/UserForm';

const userForm = new UserForm(
  /* document.querySelector('#root') */
  document.getElementById('root')
);

userForm.render();