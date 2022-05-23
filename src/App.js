import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './page/main';
import Navbar from './components/navbar';
import Document from './page/document';
import Group from './page/group';

function App() {
  const [user, setUser] = useState([]);
  return (
    <>
    <Router>
        <Navbar user={user}/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/doc' element={<Document/>} />
          <Route path='/group' element={<Group/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
