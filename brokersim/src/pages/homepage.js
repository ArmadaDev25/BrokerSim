import { Link } from "react-router-dom";
import { stockIndexes } from "../data";
function Homepage(){
    return(
        <div>
            <div class='heroMain'>
                <h1 class='heroSiteTitle'>BrokerSim</h1>
                <Link to={'/stocks'}>
                <button>See Stocks</button>
                </Link>
                
                
            </div>
            <div>
                <h2>
                    Current Indexes
                    <div class='indexContainer'>
                    {/*Loops through the stockIndexes array and displays it to the user*/}
                    {stockIndexes.map((sIndex, index)=>{
                        const {name, value}= sIndex
                        return(
                            <div>
                                <h3 key={name}>{name}</h3>
                                <h3 key={value}>{value}</h3>   
                            </div>
                            

                        )

                        
                    })}
                    </div>

                </h2>

            </div>

            
        </div>
    )

}
export default Homepage;