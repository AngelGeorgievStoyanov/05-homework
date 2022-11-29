import {  Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import Login from './components/Login/Login';


import './App.css';
import Register from './components/Register/Register';


function App() {
  return (
    <div className="App">
      <Header />
      <main id='main' className='main'>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
