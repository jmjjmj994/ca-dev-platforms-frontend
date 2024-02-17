import { useState } from 'react';
import { createUser, UserCreationData } from '../../fetch/fetch';
import { Navigate } from 'react-router-dom';
const RegisterForm = () => {
  const [user, setUser] = useState<UserCreationData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUser = ({
    id,
    value,
  }: {
    id: keyof UserCreationData;
    value: string;
  }) => {
    switch (id) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
    }

    setUser((prevUser) => ({ ...prevUser, [id]: value }));
  };

  const validate = async () => {
    let isValid = true;
    if (!user.firstName || !user.lastName || !user.email || !user.password) {
      isValid = false;
      console.log(user);
    }

    console.log('valid', isValid);

    if (isValid) {
      await createUser({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      });
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => e.preventDefault();

  return (
    <form
      onSubmit={handleSubmit}
      className="user-form flex flex-col items-center justify-center gap-5"
    >
      <div className="flex flex-col  w-full">
        <label htmlFor="first-name">First name</label>
        <input
          className="bg-light-grey border border-dark-grey py-2 pl-2 rounded-md"
          type="text"
          id="first-name"
          placeholder="First name"
          value={firstName}
          onChange={(event) =>
            handleUser({ id: 'firstName', value: event.target.value })
          }
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="last-name">Last name</label>
        <input
          className="bg-light-grey border border-dark-grey py-2 pl-2 rounded-md"
          type="text"
          id="last-name"
          placeholder="Last name"
          value={lastName}
          onChange={(event) =>
            handleUser({ id: 'lastName', value: event.target.value })
          }
        />
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="email">Email</label>
        <input
          className="bg-light-grey border border-dark-grey py-2 pl-2 rounded-md"
          type="text"
          id="email"
          placeholder="Email "
          value={email}
          onChange={(event) =>
            handleUser({ id: 'email', value: event.target.value })
          }
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="password">Password</label>
        <input
          className="bg-light-grey border border-dark-grey py-2 pl-2 rounded-md"
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(event) =>
            handleUser({ id: 'password', value: event.target.value })
          }
        />
      </div>
      <div className="flex flex-col w-full">
        <button
          onClick={async () => validate()}
          type="submit"
          className="bg-primary border border-dark-grey py-3 pl-2 mt-5 rounded-md text-light-grey"
        >
          Register
        </button>
      </div>
    </form>
  );
};
export default RegisterForm;
