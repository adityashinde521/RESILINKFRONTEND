
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import Login from './Pages/Login';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import ListProperty from './Pages/ListProperty';


function App() {

  return (

    <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home/>} />

          <Route path="/login" element={<Login/>} />

          <Route path="/signup" element={<SignUp/>} />

          <Route path="/home" element={<Home/>} />
          
          <Route path="/listproperty" element={<ListProperty/>} />

        </Routes>

    </BrowserRouter>

  );

}

export default App;