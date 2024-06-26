import { useAuthStore } from "../store/auth.store";

const Auth = () => {
  const authStatus = useAuthStore(state => state.status);

  return (
    <div>{authStatus}</div>
  );
}

export default Auth;