import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName).then(
    (result) => ({ status: 'fulfilled', value: result })
  );

  const photoPromise = uploadPhoto(fileName).catch(
    (error) => ({ status: 'rejected', value: error.toString() })
  );

  return Promise.allSettled([userPromise, photoPromise]).then((results) => results);
}

