import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sol from './Sol.png';

function Bio() {
  return (
    <div className="Bio">
      <br/>
      <img className="BioPic" src={Sol}/>
      <p className="Title"> Sol Dubock </p>
      <p className="Subtitle"> <i>(Sol_the_EPIC) </i> </p>
      <p className="Contents"> 
      2nd year Computer Science student at Cambridge University (Gonville and Caius College).
      <br/>
      Swag guy
      </p>
    </div>
  )
}

function Projects() {
  return (
    <div className="Bio">
      <Bio/>
    </div>
    
  );
}

export default Projects;