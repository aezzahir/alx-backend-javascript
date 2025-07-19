import { createUser, uploadPhoto } from "./utils";

function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  Promise.all([promise1, promise2])
    .then((values) => {
      console.log(
        `${values[0].body} ${values[1].firstName} ${values[1].lastName}`
      );
    })
    .catch(() => {
      console.log("Signup system offline");
    });
}

export default handleProfileSignup;
