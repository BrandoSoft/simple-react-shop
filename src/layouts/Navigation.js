import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navigation.css'

const list = [
    { name: "start", path: "/", exact: true },
    { name: "produkty", path: "/products" },
    { name: "kontakt", path: "/contact" },
    { name: "admin", path: "/admin" },
]

const Navigation = () => {
    const menu = list.map(e => (
        <li key={e.name}><NavLink to={e.path} exact={e.exact ? e.exact : false}>{e.name}</NavLink></li>
    ))
    return (
        <nav className="main">
            <ul>
                {menu}
            </ul>
        </nav>
    );
}

export default Navigation; 