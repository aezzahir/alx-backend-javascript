import { createUser, uploadPhoto } from "./utils";
export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();

  return {
    "photo": photo,
    "user": user,
  };
}
