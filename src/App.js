
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddUser from './Pages/AddUser/AddUser';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';


import Header from './Pages/Header/Header';
import About from './Pages/Home/Home/About/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Home/Login/Login/Login';
import Register from './Pages/Home/Home/Login/Register/Register';
import ServiceDetail from './Pages/Home/Services/ServiceDetail/ServiceDetail';
import ManageServices from './Pages/ManageServices/ManageServices';
import NotFound from './Pages/NotFound/NotFound';
import Orders from './Pages/Orders/Orders';
import Footer from './Pages/Share/Footer/Footer'
import RequireAuth from './RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/adduser' element={
          <RequireAuth>
            <AddUser></AddUser>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageServices></ManageServices>
          </RequireAuth>
        }></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
