import React from 'react'
import {NavLink} from 'react-router-dom'


export default class Navbar extends React.Component<any, {}> {
    constructor(props: any) {
      super(props);
    }
    render() {
      return (
        <header className="header">
        <nav className="navigation">
          <ul className="navigation-list">
            <li className="navigation-item">
              <NavLink to="/" className="navigation-link">Calculator</NavLink>
            </li>
            <li className="navigation-item">
              <NavLink to="/lounge" className="navigation-link">Welcome screen</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      )
    }
}