import Signup from './pages/signup';
import Signin from './pages/signin';
import Home from './pages/Home';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    
  );
}


export default App;
