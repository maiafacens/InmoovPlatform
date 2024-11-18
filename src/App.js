import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './screen/Home.js';
import Login from './screen/Login.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
