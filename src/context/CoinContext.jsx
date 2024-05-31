import { createContext, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    })
    const fetchALllCoin = async () =>{
        
    }
    const contextvalue = {

    }
    return (
        <CoinContext.Provider>
            {props.children}
        </CoinContext.Provider>
    )
}
export default CoinContextProvider;