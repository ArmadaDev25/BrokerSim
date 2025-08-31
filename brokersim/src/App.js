import Homepage from './pages/Homepage.js';
import './App.css';




// Route Import
import {BrowserRouter, Route, Routes} from "react-router-dom"



function App() {
  

  return (
    <div className="App">
      
      
      <Routes>
        <Route path="/" element={<Homepage />}/>
        
      </Routes>
      
      

    </div>
  );
}

export default App;
