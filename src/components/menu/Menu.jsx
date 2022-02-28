import React from 'react'
import "./menu.scss";

export default function Menu({open,setopen}) {
  return (
    <div className={"menu " + (open && 'active')}>
      <ul>
          <li onClick={()=>setopen(!open)}>
              <a  href="#intro">Home</a>
          </li>
          
          <li onClick={()=>setopen(!open)}>
              <a href="#portfolio">About Me</a>
          </li>

          <li onClick={()=>setopen(!open)}>
              <a href="#skills">Skills</a>
          </li>

          <li onClick={()=>setopen(!open)}>
              <a href="#works">My Works</a>
          </li>

          <li onClick={()=>setopen(!open)}>
              <a href="#contact">Contact Me</a>
          </li>
      </ul>
    </div>
  )
}
