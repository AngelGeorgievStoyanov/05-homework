import {  Route, Routes } from 'react-router-dom';
import {Home} from './components/home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';


import './App.css';
import Register from './components/Register/Register';




function App() {
  return (
    <div className="App">
      <Header />
      <main id='main' className='main'>
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
