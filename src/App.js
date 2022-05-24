import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './page/main';
import Navbar from './components/navbar';
import Document from './page/document';
import Chat from './page/chat';
import Group from './page/group'
import AddGroup from './page/addGroup';
import DetailGroup from './page/detailGroup';

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
          <Route path='/chat' element={<Chat/>} />
          <Route path="/group/create" element={<AddGroup />} />
          <Route path="/group/03122807" element={<DetailGroup />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
