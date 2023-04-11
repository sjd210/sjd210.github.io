import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Projects from './Projects/Projects';
import Project from './Project/Project';
import Home from './Home/Home';
import Head from './Head/Head';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {projList} from './Projects/ProjList/ProjectList';
import { useParams } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

let urlList = Array(projList.length);
for (let i = 0; i < projList.length; i++) {
  urlList[i] = <Route path={projList[i]["link"]} element={<Project title={projList[i]["title"]}/>} />
}

root.render(
  <div className="all">
    <Head/>
    <Router>
      <Routes>
        {urlList}
        <Route path="/projects" element={<Projects/>} />
        <Route path="/home" element={<Home/>} /> 
        <Route path="*" element={<Navigate to="/projects" />} />
      </Routes>
    </Router>
  </div>
);
