import React from "react"
import { Link } from "gatsby"
import Search from "./Search"


export default function Nav ({menuContent, Company}) {
 
  return (
    <header className="Header">
      <nav className="Header-nav">
        <Link to="/">
        <img
          className="Header-nav-logo"
          src={Company.logo}
          alt="logo"
        />
        </Link>
        <Search/>
        <ul>
          {menuContent.map((item, index) => (
            <li key={index}>
                <Link to={item.href}>{item.caption}</Link>
            </li>
          ))}
        </ul>
      </nav>
      
    </header>
  )
}
