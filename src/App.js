import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { useDispatch, useSelector } from 'react-redux';


function App() {

  const isAuthenticated= useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch()



  return (
    <>
      <Header/>
      {!isAuthenticated && <Auth/>}
      {isAuthenticated && <UserProfile/>}
      <Counter />
    </>
  );
}

export default App;
