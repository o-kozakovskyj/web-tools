import fetchUser from './profile/gateway.js';
import { printProfile } from './profile/index.js';

fetchUser('Github').then(userData =>
  printProfile({
    name: userData.name,
    company: userData.location,
  }),
);
