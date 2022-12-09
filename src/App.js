
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';


import Header from './Pages/Header/Header';
import About from './Pages/Home/Home/About/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Home/Login/Login/Login';
import Register from './Pages/Home/Home/Login/Register/Register';
import ServiceDetail from './Pages/Home/Services/ServiceDetail/ServiceDetail';
import NotFound from './Pages/NotFound/NotFound';
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
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
