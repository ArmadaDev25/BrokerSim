import { Link } from "react-router-dom";
function Homepage(){
    return(
        <div>
            <div class='heroMain'>
                <h1>BrokerSim</h1>
                <Link to={'/stocks'}>
                <button>See Stocks</button>
                
                </Link>
                
            </div>
            
        </div>
    )

}
export default Homepage;