import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './Components/Home';
import Add from './Components/Add';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/add' element={<Add/>}/>
    <Route path='/update/:id' element={<Add/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
