import { Link } from "react-router-dom"
import './header.css'

export default function Header() {
  return (
  <div className="header">
    <div className="navbar">
      <div className="items item1"><Link className="link" to= "/">Home</Link></div>
      <div className="items item2"><Link  className="link" to = "/about" >About</Link></div>
      <div className="items item3"><Link className="link" to = "/contact">Contact</Link></div>
    </div>
  </div>
  )
}
