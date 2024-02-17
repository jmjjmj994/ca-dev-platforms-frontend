const RegisterForm = () => {
  return (
    <form className="user-form flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col  w-full">
        <label htmlFor="first-name">First name</label>
        <input
          className="bg-light-grey border border-dark-grey py-2 pl-2 rounded-md"
          type="text"
          id="first-name"
          placeholder="First name"
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="last-name">First name</label>
        <input
          className="bg-light-grey border border-dark-grey py-2 pl-2 rounded-md"
          type="text"
          id="last-name"
          placeholder="Last name"
        />
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="email">Email</label>
        <input
          className="bg-light-grey border border-dark-grey py-2 pl-2 rounded-md"
          type="text"
          id="email"
          placeholder="Email "
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="password">Password</label>
        <input
          className="bg-light-grey border border-dark-grey py-2 pl-2 rounded-md"
          type="text"
          id="password"
          placeholder="Password"
        />
      </div>
      <div className="flex flex-col w-full">
        <button className="bg-primary border border-dark-grey py-3 pl-2 mt-5 rounded-md text-light-grey">
          Register
        </button>
      </div>
    </form>
  );
};
export default RegisterForm;
