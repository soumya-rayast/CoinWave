import { useContext, useEffect, useState } from "react";
import "../Styles/home.css";
import { CoinContext } from "../context/CoinContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };

  const searchHandler = async (e) => {
    e.preventDefault();
    const coins = allCoin.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Largest <br /> Crypto Marketplace
          </h1>
          <p className="hero-description">
            Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.
          </p>
          <form className="search-form" onSubmit={searchHandler}>
            <input
              type="text"
              className="search-input"
              placeholder="Search crypto..."
              onChange={inputHandler}
              value={input}
              list="coinList"
            />
            <datalist id="coinList">
              {allCoin.map((item, index) => (
                <option key={index} value={item.name} />
              ))}
            </datalist>
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
      </div>

      {/* Crypto Table Section */}
      <div className="crypto-table">
        <div className="table-header">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className="change">24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
        <div className="table-body">
          {displayCoin.slice(0, 10).map((item, index) => (
            <Link to={`/coin/${item.id}`} className="table-row" key={index}>
              <p>{item.market_cap_rank}</p>
              <div className="coin-details">
                <img src={item.image} alt={item.name} className="coin-image" />
                <p>{`${item.name} - ${item.symbol.toUpperCase()}`}</p>
              </div>
              <p>{`${currency.symbol}${item.current_price.toLocaleString()}`}</p>
              <p
                className={
                  item.price_change_percentage_24h > 0 ? "change-green" : "change-red"
                }
              >
                {Math.floor(item.price_change_percentage_24h * 100) / 100}%
              </p>
              <p className="market-cap">{`${currency.symbol}${item.market_cap.toLocaleString()}`}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
