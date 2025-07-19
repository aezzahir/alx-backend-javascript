import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, filename) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(filename);
  return Promise.allSettled([promise1, promise2]).then((results) => {
    console.log("[");
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log("{");
        console.log(`status: '${result.status}',`);
        console.log(
          `value: { firstName: '${result.value.firstName}', lastName: '${result.value.lastName}' }`
        );
        console.log("}, ");
      } else {
        console.log(`{ status: '${result.status}', value:'${result.reason}' }`);
      }
    });
    console.log("]");
  });
}
