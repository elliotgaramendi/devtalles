import './App.css';
import AuthPage from './components/AuthPage';
import BusinessCard from './components/ProfileCard';
import { AuthProvider } from './context/AuthContext';
import useFollow from './hooks/useFollow';

function App() {
  const { followers, increaseFollowersBy } = useFollow({ initialValue: 0 });

  return (
    <AuthProvider>
      <main>
        <section className="flex min-h-dvh py-16">
          <div className="grid place-items-center place-content-center gap-2 md:grid-cols-2 container mx-auto px-4">
            <BusinessCard followers={followers} onFollowersChange={increaseFollowersBy} />
            <AuthPage />
          </div>
        </section>
      </main>
    </AuthProvider>
  )
}

export default App
