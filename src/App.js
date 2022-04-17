
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Shared/Header/Header';
import CheackOut from './Pages/CheackOut/CheackOut';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
  <Header></Header>      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout' element={
        <RequireAuth>
          <CheackOut></CheackOut>
        </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Register></Register>}></Route>
        <Route path='/resetpassword' element={<ForgotPassword></ForgotPassword>}></Route>
      </Routes>
    </div>
  );
}

export default App;
