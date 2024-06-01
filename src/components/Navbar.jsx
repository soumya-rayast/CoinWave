import "../Styles/Navbar.css"
import logo from "../../src/assets/logo.png"
import arrow_icon from "../../src/assets/arrow_icon.png"
import { useContext } from "react"
import { CoinContext } from "../context/CoinContext"

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" })
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" })
        break;
      }
      case "euro": {
        setCurrency({ name: "eur", symbol: "€" })
        break;
      }
      default : {
        setCurrency({ name: "inr", symbol: "₹" })
        break;
      }
    }
  }
  return (
    <div className="navbar">
      <div className="nav-left">
        <img src={logo} alt="logo.png" className="logo" />
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
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="euro">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sign up
          <img src={arrow_icon} alt="arrow_tag" className="arrow" />
        </button>
      </div>
    </div>
  )
}

export default Navbar