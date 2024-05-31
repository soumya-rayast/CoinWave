import "../Styles/Navbar.css"
import logo from "../../src/assets/logo.png"
import arrow_icon from "../../src/assets/arrow_icon.png"
const Navbar = () => {
  return (
    <div className="navbar">  
      <div className="nav-left">
        <img src={logo} alt="logo.png" className="logo"/>
        <p>
            CoinWave
        </p>
        </div>
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select>
            <option value="usd">USD</option>
            <option value="euro">EUR</option>
            <option value="inr">INR</option>
        </select>
        <button>
            Sign up
        <img src={arrow_icon} alt="arrow_tag" className="arrow"/> 
        </button>
      </div>
    </div>
  )
}

export default Navbar
