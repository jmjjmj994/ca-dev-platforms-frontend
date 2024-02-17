/* GET
https://ca-dev-platforms.onrender.com/api/cars

POST

https://ca-dev-platforms.onrender.com/api/cars

PUT

https://ca-dev-platforms.onrender.com/api/cars/id

DELETE

https://ca-dev-platforms.onrender.com/api/cars/id

POST
https://ca-dev-platforms.onrender.com/api/signup

GET

https://ca-dev-platforms.onrender.com/api/getuser

*/

import { json } from 'react-router-dom';

export interface UserCreationData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface UserCreationResponse {
  id: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
}

export const createUser = async ({
  firstName,
  lastName,
  email,
  password,
}: UserCreationData) => {
  const url: string = 'https://ca-dev-platforms.onrender.com/api/signup';

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }),
      headers: { 'Content-type': 'application/json' },
    });

    console.log(response, 'response');
    const {
      id,
      access_token,
      expires_in,
      refresh_token,
    }: UserCreationResponse = await response.json();
    const data = {
      id: id,
      access_token: access_token,
      expires_in: expires_in,
      refresh: refresh_token,
    };
    console.log(data);
    localStorage.setItem(
      'user',
      JSON.stringify({
        access_token: data.access_token,
        userId: data.id,
        loggedIn: true,
      })
    );
  } catch (error) {
    console.error(error);
  }
};
