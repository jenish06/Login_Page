import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
import Error from './components/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Protected from './components/Protected';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/details' element={<Protected Component={Details} />} />
            <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </> 
  );
}

export default App;
