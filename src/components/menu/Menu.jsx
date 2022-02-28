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
              <a href="#portfolio">Placement</a>
          </li>

          <li onClick={()=>setopen(!open)}>
              <a href="#skills">Recruiters</a>
          </li>

          <li onClick={()=>setopen(!open)}>
              <a href="#works">CDC</a>
          </li>

          <li onClick={()=>setopen(!open)}>
              <a href="#contact">Contacts</a>
          </li>
      </ul>
    </div>
  )
}
