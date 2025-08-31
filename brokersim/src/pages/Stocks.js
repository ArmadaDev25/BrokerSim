import { avalibleStocks } from "../data";

function Stocks(){
    return(
        <div>
            <h1>Currently Listed Stocks</h1>
            {avalibleStocks.map((avaliblestock,index)=>{
                
            })}
        </div>
    )

}
export default Stocks;