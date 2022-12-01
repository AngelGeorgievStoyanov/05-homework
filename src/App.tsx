import {  Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import AllUsers  from './components/AllUsers/AllUsers';
import Register from './components/Register/Register';
import  Logout  from './components/Logout/Logout';


import './App.css';




function App() {
  return (
    <div className="App">
      <Header />
      <main id='main' className='main'>
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/all'  element={<AllUsers />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
