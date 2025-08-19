import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Home(){
    return(
        <div>
            <h1>Location </h1>
            <form>
              <input type="search" placeholder="Search "/>  
            </form>
        </div>
    );
}
export default Home;