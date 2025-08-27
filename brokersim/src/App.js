import logo from './logo.svg';
import './App.css';
import { ownedStocks } from './data';
import { avalibleStocks } from './data';


function App() {
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
      // Create a new object to put into the OwnedStocks Variable
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => addStock(avalibleStocks[0])}>Add</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
