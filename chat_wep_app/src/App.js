
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss'
import {Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { ProfileProvider } from './context/profile.context';
function App() {
  return (
    <ProfileProvider>
 <Switch>
      <PublicRoute path="/sign">
    <SignIn/>
    
      </PublicRoute>
      <PrivateRoute path="/">
        <Home/>
      </PrivateRoute>
    </Switch>
   
    </ProfileProvider>
   
      
  );
} 

export default App;
