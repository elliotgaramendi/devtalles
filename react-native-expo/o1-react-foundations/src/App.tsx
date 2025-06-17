import './App.css';
import BusinessCard from './components/ProfileCard';
import useFollow from './hooks/useFollow';

function App() {
  const { followers, increaseFollowersBy } = useFollow({ initialValue: 0 });

  return (
    <main>
      <section className="flex items-center justify-center h-dvh">
        <BusinessCard followers={followers} onFollowersChange={increaseFollowersBy} />
      </section>
    </main>
  )
}

export default App
