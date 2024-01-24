import { Link } from "react-router-dom"
import './header.css'

export default function Header() {
  return (
  <div className="header">

    <nav className="navbar">
    <ul>
      <li><Link to="/" className="link">Home</Link></li>
      <li><Link to="/about"  className="link">About</Link></li>
      <li><Link to="/contact" className="link">Contact</Link></li>
    </ul>
    </nav>

  </div>
  )
}
