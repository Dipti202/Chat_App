
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss'
import {Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
    <Switch>
      <PublicRoute path="/sign">
    <SignIn/>
    
      </PublicRoute>
      <PrivateRoute path="/">
        <Home/>
      </PrivateRoute>
    </Switch>
   
      
  );
} 

export default App;
