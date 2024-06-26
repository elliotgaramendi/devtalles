import './App.css';
import Auth from './components/Auth';
import BusinessCard from './components/BusinessCard';
import Likes from './components/Likes';

function App() {
  return (
    <main>
      <h1>React Foundations</h1>
      <BusinessCard />
      <Likes />
      <Auth />
    </main>
  );
}

export default App;