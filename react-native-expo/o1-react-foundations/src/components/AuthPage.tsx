import { useAuthContext } from "../context/AuthContext";

const AuthPage = () => {
  const { isChecking, isAuthenticated, user, signIn, signOut } = useAuthContext();

  if (isChecking) {
    return <h3>Checking... 🤔</h3>;
  }

  return (
    <div>
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
          <button
            className="py-2 px-4 bg-sky-400 text-gray-900 rounded-lg font-medium cursor-pointer hover:bg-sky-500 transition"
            onClick={() => signIn('elliotgaramendi@base2.com', 'theMostSecretPassword')}
          >
            Sign in
          </button>
        </div>
      )
      }
    </div>
  );
}

export default AuthPage;