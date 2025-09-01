import { useForm } from "react-hook-form";
import { useAuthContext } from "../../context/AuthContext";

type FormInputs = {
  email: string;
  password: string;
};

const AuthWidget = () => {
  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (myForm: FormInputs) => {
    const { email, password } = myForm;
    signIn(email, password);
  };

  const { isChecking, isAuthenticated, user, signIn, signOut } = useAuthContext();

  if (isChecking) {
    return (
      <div className="py-4">
        <h3>Checking... 🤔</h3>
      </div>
    );
  }

  return (
    <div className="py-4">
      {isAuthenticated ? (
        <div className="flex flex-col gap-1 items-center">
          <h3>Welcome! 🎉</h3>
          <pre className="text-[8px] md:text-[10px] text-gray-400">{JSON.stringify(user, null, 2)}</pre>
          <button
            className="py-2 px-4 bg-gray-700 text-gray-200 rounded-lg font-medium cursor-pointer hover:bg-gray-600 transition"
            onClick={signOut}
          >
            Sign out
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-1 items-center">
          <h3>Enter the app 🔑</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md min-w-2xs mx-auto"
          >
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="egaramendi@base2.com"
                required
                {...register('email', { required: true })}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                {...register('password', { required: true })}
              />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AuthWidget;