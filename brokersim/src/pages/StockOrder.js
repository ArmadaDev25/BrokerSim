import { useParams } from "react-router-dom"
import { avalibleStocks } from "../data";
import { useEffect, useState } from "react";

function StockOrder(){
    const params = useParams()
    console.log(params.symbol)

    // This useState will contain the information for the stock the user is currently trying to buy
    const [stock, setStock] = useState(null)

    // This function will get the stock information from the avalibleStocks Array
    function getStock(){
        // Contains the object for the current stock
        const currentStock = avalibleStocks.find(({symbol}) => symbol === params.symbol)
        console.log("This is the object the CurrentStock is set to: " + currentStock.symbol)
        setStock(currentStock)
    }
    console.log(stock)

    useEffect(() => {
        getStock()
    },[])
    // Page that loads in first while the Stock variable is null
    function loadingPage(){
        return(
        <div>
            <h1>
                Order Ticket
            </h1>
            <h2>
                Loading Data
            </h2>
        </div>
        )
    }
    // Page that loads after Stock has been populated
    function loaded() {
        return(
        <div>
            <h1>
                Order Ticket
            </h1>
            <h2>
                {stock.symbol}
            </h2>
        </div>
        )
    }
    return stock ? loaded() : loadingPage()
}
export default StockOrder;