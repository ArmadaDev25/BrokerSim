import { avalibleStocks } from "../data";


function Stocks(){
    return(
        <div>
            <h1>Currently Listed Stocks</h1>
            {avalibleStocks.map((avaliblestock,index)=>{
                const {symbol, value} = avaliblestock
                return(
                    <div>
                        <h2 key={symbol}>{symbol}</h2>

                    </div>
                )
            })}
        </div>
    )

}
export default Stocks;