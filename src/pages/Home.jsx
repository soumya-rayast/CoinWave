import "../Styles/home.css"
const Home = () => {
  return (
    <div className="Home">
      <div className="hero">
        <h1>Largest <br/> Crypto Marketplace</h1>
        <p>Welcome to the worlds largest cryptocurrency marketplace. Sign up tp explore more about cryptos.</p>
        <form>
          <input type="text" placeholder="Search crypto.." />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className="change">24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
      </div>
    </div>
  )
}
export default Home