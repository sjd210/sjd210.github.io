import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import grass from './grass and such.png';
import './Head.css';

function Banner() {
    return (
        <div className="Banner" />
    )
}
  
function Header() {
    let active = window.location.pathname.split('/')[1]

    return (
        <div className="Nav">
        <img className="grass" src={grass}/>      
        <Navbar className="Navs" sticky="top" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Nav.Link href="/home"> <p className={String(active=="home")}> {"⠀Home"} </p> </Nav.Link>
           {/* <Nav.Link href="/Links"> <p> {"⠀Links"} </p> </Nav.Link> */}
            <Nav.Link href="/projects"> <p className={String(active=="projects")}> {"⠀Projects"} </p> </Nav.Link>
        </Navbar>
        </div>
    )
} 

function Head() {
    return(
        <div className="container">
            <Banner/>
            <Header/>
        </div>
    );
}

export default Head;