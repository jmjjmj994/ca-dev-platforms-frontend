import { useState } from 'react';
import { signIn, UserLoginData } from '../../fetch/fetch';
import { useNavigate, NavLink } from 'react-router-dom';
const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserLoginData>({
    email: '',
    password: '',
  });
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState('');

  const handleUser = ({
    id,
    value,
  }: {
    id: keyof UserLoginData;
    value: string;
  }) => {
    switch (id) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
    setUser((prevUser: UserLoginData) => ({ ...prevUser, [id]: value }));
  };
  const validate = async () => {
    let isValid = true;
    if (!user.email || !user.password) {
      isValid = false;
    }

    if (isValid) {
      try {
        await signIn({ email: user.email, password: user.password });
        setEmail('');
        setPassword('');
        navigate('/');
      } catch (error) {
        const err = error.message;
        setError(err);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="user-form flex flex-col items-center justify-center gap-5"
    >
      <div className="flex flex-col  w-full">
        <label htmlFor="email">Email</label>
        <input
          className="bg-light-grey border border-dark-grey py-2 pl-2 rounded-md"
          type="text"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(event) =>
            handleUser({ id: 'email', value: event.target.value })
          }
        />
      </div>
      <div className="flex flex-col  w-full">
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

      <div className="min-h-5  w-full">
        {error && (
          <span className="text-sm tracking-wide  text-red-500">{error}</span>
        )}
      </div>

      <div className="flex flex-col  w-full">
        <button
          onClick={async () => validate()}
          className="bg-primary border border-dark-grey py-3 pl-2 mt-5 rounded-md text-light-grey"
        >
          Log in
        </button>
      </div>

      <p className="">
        Don´t have an account?
        <NavLink className={'ml-2 text-blue-500 underline'} to={'/sign-up'}>
          Register
        </NavLink>
      </p>
    </form>
  );
};

export default LoginForm;
