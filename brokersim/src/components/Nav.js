import {Link} from 'react-router-dom'
function Nav(){
    return(
        <div class='SiteHeader'>
            
            <h1>
                BrokerSim
            </h1>

            
            <Link to='/'>
            <p>Home</p>
            </Link>
            <Link to='/stocks'>
            <p>Stock Listings</p>
            </Link>
            
           

            
        </div>

    )
}
export default Nav;