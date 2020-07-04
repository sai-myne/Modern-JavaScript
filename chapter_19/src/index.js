import {styleBody, addTitle, contact} from './dom';
import users, {getPremUsers} from './data';

const premUser = getPremUsers(users);
console.log(users, premUser);

console.log('test');