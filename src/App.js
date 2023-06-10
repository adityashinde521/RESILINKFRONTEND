
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import Login from './Pages/Login';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';


function App() {

  return (

    <BrowserRouter>

        <Routes>

          <Route path="/" element={<Login/>} />

          <Route path="/login" element={<Login/>} />

          <Route path="/signup" element={<SignUp/>} />

          <Route path="/home" element={<Home/>} />

        </Routes>

    </BrowserRouter>

  );

}

export default App;