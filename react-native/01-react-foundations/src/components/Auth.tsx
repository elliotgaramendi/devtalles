import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";

const Auth = () => {
  const status = useAuthStore(state => state.status);
  const user = useAuthStore(state => state.user);
  const signIn = useAuthStore(state => state.signIn);
  const signOut = useAuthStore(state => state.signOut);

  useEffect(() => {
    setTimeout(() => {
      signOut();
    }, 1500);
  }, [signOut]);

  if (status === 'checking') return <h2>Loading</h2>

  return (
    <section>
      <h2>
        {
          status === 'authenticated' ?
            user?.name
            :
            'Unauthenticated'
        }
      </h2>
      {
        status === 'authenticated' ?
          <button onClick={signOut}>Sign Out</button>
          :
          <button onClick={() => signIn('elliotgaramendi@gmail.com', '123456')}>Sign In</button>
      }
    </section>
  );
};

export default Auth;