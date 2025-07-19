import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, filename) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(filename);
  return Promise.allSettled([promise1, promise2]).then((results) => (
    results.map(res => ({
        status: res.status,
        value: res.status === 'fulfilled' ? res.value : String(res.reason),
    }))
  ))};
