
import './App.css';

// Route Import
import {BrowserRouter, Route, Routes} from "react-router-dom"
// Page Imports
import Stocks from './pages/Stocks.js';
import Homepage from './pages/Homepage.js';



function App() {
  

  return (
    <div className="App">
      
      {/* 
      These are the various avalible routes within the website
      Each Route will render a different page in the /pages folder
      */}
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/stocks" element={<Stocks />}/>
        
      </Routes>
      
      

    </div>
  );
}

export default App;
