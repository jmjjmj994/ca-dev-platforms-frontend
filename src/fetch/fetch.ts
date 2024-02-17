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

interface ResponseUser {
  id: string;
  email: string;
}
interface ResponseSession {
  access_token: string;
  token_type: string;
  expires: number;
}

interface UserCreationResponse {
  user: ResponseUser;
  session: ResponseSession;
}

export const createUser = async ({
  firstName,
  lastName,
  email,
  password,
}: UserCreationData) => {
  const url: string = 'https://ca-dev-platforms.onrender.com/api/signup';


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
    if (response.status !== 200) {
      const error = await response.json();
      const errorMessage: string = error.message;
      throw error;
    } else {
      const { user, session }: UserCreationResponse = await response.json();
      console.log(user.id, session);
      localStorage.setItem(
        'user',
        JSON.stringify({
          id: user.id,
          user: user.email,
          access_token: session.access_token,
          token_type: session.token_type,
          expires: session.expires,
          loggedIn: true,
        })
      );
    }

};

export const errorHandler = (error: unknown) => {
  if (typeof error === 'string') {
    return error;
  } else if (error instanceof Error) {
    return error.message;
  }
};

export const signIn = async () => {};
