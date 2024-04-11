import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let string;
  return uploadPhoto()
    .then((result) => {
      string = `${result.body}`;
      return createUser();
    })
    .then((result) => console.log(`${string} ${result.firstName} ${result.lastName}`))
    .catch(() => console.log('Signup system offline'));
}
