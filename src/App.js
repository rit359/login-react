import './App.css';
import Header from './Header';
import SignupForm from './Signup';
import LoginForm from './Login';
import { useSelector } from 'react-redux';

function App() {
 const loginClicked =  useSelector(state=>state.loginClicked);
  return (
    <div className="App">
      <Header/>
      {
        loginClicked ? <LoginForm/> :  <SignupForm/>
      } 
    </div>
  );
}

export default App;
