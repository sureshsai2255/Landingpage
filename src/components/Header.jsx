import { Link } from "react-router-dom"
import './header.css'

export default function Header() {
  return (
  <div className="header">
    <div className="navbar">
      <div className="items item1"><Link to = "/" className="link">Home</Link></div>
      <div className="items item2"><Link to = "/about" className="link">About</Link></div>
      <div className="items item3"><Link to = "/contact" className="link">Contact</Link></div>
    </div>
  </div>
  )
}
