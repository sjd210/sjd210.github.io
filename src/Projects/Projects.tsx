import React, {useState} from 'react';
import { Image } from 'react-bootstrap';
import pad from './lilypad.png'
import grass from './platform.png'
import splash from './expandingCircle.gif'
import {projList} from './ProjList/ProjectList';
import './Projects.css';
import 'bootstrap/dist/css/bootstrap.css';
import Select from "react-select";

function ProjectGrid(projList: any[]) { 
  let projPerRow = 1;
  projPerRow += Math.min(Math.floor(window.innerWidth/500), 2);

  projPerRow = 3;

  let projCount = projList.length;
  let rowCount = Math.ceil(projCount/projPerRow)
  let squares = new Array(rowCount);

  for (let i = 0; i < rowCount; i++) {
    squares[i] = new Array(projPerRow);
    for (let j = 0; j < projPerRow; j++) {
      if (projCount > i*projPerRow + j) {
          squares[i][j] = 
          <div className="ListElement">
            {ProjectThumb(projList[i*projPerRow + j])}
          </div>
      }
    }
  }

  return (
    <div className={"ProjGrid Grid" + projPerRow}>
      {squares}
    </div>
  )
}

function ProjectList(projlist: any[]) {
  let projPerRow = 1;

  let projCount = projList.length;
  let rowCount = Math.ceil(projCount/projPerRow)
  let squares = new Array(rowCount);

  for (let i = 0; i < rowCount; i++) {
    squares[i] = new Array(projPerRow);
    for (let j = 0; j < projPerRow; j++) {
      if (projCount > i*projPerRow + j) {
        squares[i][j] = 
        <div className="ListElement">
          {ProjectThumbD(projList[i*projPerRow + j])}
          {ProjectDesc(projList[i*projPerRow + j])}
        </div>
      }
    }
  }

  return (
  <div className={"ProjGrid Grid1"}>
      {squares}
  </div>
  )
}

function ProjectDesc(proj: any) {
  const options = [
    {label: 'Person1', className:"option"},
    {value: 'test', label: 'Person2'},
  ];

  let collabList = ""
  if ("collaborators" in proj) {
    for (let i=0; i<proj["collaborators"].length; i++) {
      collabList += proj["collaborators"][i] + ", ";
    }
    collabList = collabList.slice(0, -2);
  }

  let tagList = ""
  if ("tags" in proj) {
    for (let i=0; i<proj["tags"].length; i++) {
      tagList += proj["tags"][i] + ", ";
    }
    tagList = tagList.slice(0, -2);
  }
  
  return (
    <div className="Desc">
      <img className="DescBackground" src={grass}/>
      <p className="DescText description">
        {proj["description"]}
      </p>
      <p className="DescText DateTitle">
        Date:
      </p>
      <p className="DescText date">
        {proj["date"]}
      </p>
      {/*<Select className="collaboratorsSelect" options={options} 
      styles={customStyles}/> */}
      <p className="DescText CollaboratorsTitle">
        Collaborators:
      </p>
      <p className="DescText collaborators">
        {collabList}
      </p>
      <p className="DescText TagTitle">
        Tags:
      </p>
      <p className="DescText tags">
        {tagList}
      </p>
    </div>
  )

}

function ProjectThumbD(proj: any) {
  return (
    <div className={"Proj ProjD Delay" + Math.floor(Math.random() * 5)}> 
      <img className="ProjBackground" src={pad}/>
      <a className="link" href={proj["link"]}>
        <img className="ProjForeground ProjIcon" src={proj["image"]}/>
        <p className="ProjForeground ProjTitle">
          {proj["title"]}
        </p>
      </a>    
    </div>
  )
}

function ProjectThumb(proj: any) {
  return (
    <div className={"Proj Delay" + Math.floor(Math.random() * 5)}> 
      <img className="ProjBackground" src={pad}/>
      <a className="link" href={proj["link"]}>
        <img className="ProjForeground ProjIcon" src={proj["image"]}/>
        <p className="ProjForeground ProjTitle">
          {proj["title"]}
        </p>
      </a>    
    </div>
  )
}

function switchMode(mode:any, setMode:any) {
  if (mode[0] == "list") {
    setMode(["grid", ProjectGrid(projList)])
  }
  else if (mode[0] == "grid") {
    setMode(["list", ProjectList(projList)])
  }
}

function backgroundClicked(e:any, setX:any, setY:any) {
  setX(String(Math.random()*window.innerWidth-215)+"px"); 
  setY(String(Math.random()*window.innerHeight+215)+"px"); //BANNER MESSES THIS UP
  let a = document.getElementById("gif") as HTMLImageElement;
  a.src = {splash}.splash; //https://stackoverflow.com/questions/36575161/how-can-dynamically-remove-element-of-form-by-javascript
}

function Projects() {
  let a="";

  const [mode, setMode] = useState(["list", ProjectList(projList)]);
  const [X, setX] = useState("");
  const [Y, setY] = useState("");
  
  return (
    <div className="Projects" onClick={e => backgroundClicked(e, setX, setY)}>
      <img id="gif" className="splash" key={X} src={splash} style={{left:X, top:Y}}/>
      <button onClick={() => switchMode(mode, setMode)}></button>
      {mode[1]}
    </div>
  );
}

export default Projects;