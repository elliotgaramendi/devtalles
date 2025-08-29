import './App.css';
import { AuthProvider } from './context/AuthContext';
import Home from './ui/pages/Home';

function App() {
  return (
    <AuthProvider>
      <main>
        <Home />
      </main>
    </AuthProvider>
  )
}

export default App
