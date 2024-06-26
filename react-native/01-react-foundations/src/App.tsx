import './App.css';
import Auth from './components/Auth';
import BusinessCard from './components/BusinessCard';
import Forms from './components/Forms';
import Likes from './components/Likes';
import Users from './components/Users';

function App() {
  return (
    <main>
      <h1>React Foundations</h1>
      <BusinessCard />
      <Likes />
      <Auth />
      <Users />
      <Forms />
    </main>
  );
}

export default App;