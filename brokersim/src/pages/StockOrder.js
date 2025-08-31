import { useParams } from "react-router-dom"
import { avalibleStocks, ownedStocks} from "../data";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";

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

    function addStock(input){
    let stockOwned = false;
    for (let x = 0; x < ownedStocks.length; x++){
      // Checks to see if the user already own the stock
      if (input.symbol = ownedStocks[x].symbol){
        //console.log("you own this stock");
        stockOwned = true;
        ownedStocks[x].owned = ownedStocks[x].owned + 1;
      }
    }
    // If no owned Stock is found, create a new Stock object and add it to the ownedStocks array
    if (stockOwned == false){
      // Create a new object to put into the OwnedStocks array
      const newStock = new Object({
        symbol: input.symbol,
        value: input.value,
        owned: 1
      })
      // Push the newly created object to the OwnedStocks Array
      ownedStocks.push(newStock);
    }
    // Debug that shows that the stock has been added to the OwnedStockArray
    console.log("Owned After")
    console.log(ownedStocks)
  }

    useEffect(() => {
        getStock()
    },[])
    // Page that loads in first while the Stock variable is null
    function loadingPage(){
        return(
        <div>
            <Nav/>
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
            <Nav/>
            <h1>
                Order Ticket
            </h1>
            <h2>
                {stock.symbol}
            </h2>
            <button onClick={()=>addStock(stock)}>Place Order</button>
        </div>
        )
    }
    return stock ? loaded() : loadingPage()
}
export default StockOrder;