const LoginForm = () => {
  return (
    <form className="user-form flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col  w-full">
        <label htmlFor="email">Email</label>
        <input
          className="bg-light-grey border border-dark-grey py-2 pl-2 rounded-md"
          type="text"
          id="email"
          placeholder="Email "
        />
      </div>
      <div className="flex flex-col  w-full">
        <label htmlFor="password">Password</label>
        <input
          className="bg-light-grey border border-dark-grey py-2 pl-2 rounded-md"
          type="text"
          id="password"
          placeholder="Password"
        />
      </div>
      <div className="flex flex-col  w-full">
        <button className="bg-primary border border-dark-grey py-3 pl-2 mt-5 rounded-md text-light-grey">
          Create
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
