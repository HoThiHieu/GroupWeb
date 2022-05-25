import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import Login from './page/login';
import Register from './page/register';
import Home from './page/home';
import Document from './page/document';
import Group from './page/group'
import AddGroup from './page/group/add';
import DetailGroup from './page/group/detail';
import Chat from './page/chat';

function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path="/home"
            element={<MainLayout component={Home} />}
          />
          <Route
            path="/document"
            element={<MainLayout component={Document} />}
          />
          <Route
            path="/group"
            element={<MainLayout component={Group} />}
          />
          
          <Route
            path="/group/create"
            element={<MainLayout component={AddGroup} />}
          />
          <Route
            path="/group/detail"
            element={<MainLayout component={DetailGroup} />}
          />
          <Route
            path="/chat"
            element={<MainLayout component={Chat} />}
          />
          <Route
            path="/"
            element={<MainLayout component={Home} />}
          />

        </Routes>
      </Router>
    </>
  );
}

export default App;
