import Nav from "../components/Nav";
import { avalibleStocks } from "../data";
import { Link } from "react-router-dom";


function Stocks(){
    return(
        <div>
            <Nav/>
            <h2>Currently Listed Stocks</h2>
            {/*Loops through the avalible stocks array and displays it to the user*/}
            {avalibleStocks.map((avaliblestock,index)=>{
                const {symbol, value} = avaliblestock
                return(
                    /*Gave the div a key to stop an error*/
                    <div key={symbol}>
                        <h3 key={symbol}>{symbol}</h3>
                        <p key={value}>{value}</p>
                        <Link to={`/order/${symbol}`}>
                            {/*Gave the button a key to stop an error*/}
                            <button key={symbol}>
                                Buy
                            </button>
                        </Link>

                    </div>
                )
            })}
        </div>
    )

}
export default Stocks;