import { useState } from 'react';
import './App.css';
import BusinessCard from './components/ProfileCard';

function App() {
  const [followers, setFollowers] = useState(0);

  return (
    <main>
      <section className="flex items-center justify-center h-dvh">
        <BusinessCard followers={followers} onFollowersChange={setFollowers} />
      </section>
    </main>
  )
}

export default App
