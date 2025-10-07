import './App.css';
import Signin from './components/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import Line from './components/Line'

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? <Line /> : <Signin />}
    </div>
  );
}

export default App;
