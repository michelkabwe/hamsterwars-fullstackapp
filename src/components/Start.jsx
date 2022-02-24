import "./Start.css";
import { Link } from "react-router-dom";
const Start = () => (
  <div>
    <main className="home-main">
      <div className="home-container">
        <h1>Welcome to Hamsterwars!</h1>
        <h2>Battle of the hamsters</h2>
        <h3>
          <Link to="/Battle"> GO TO BATTLE
          </Link> Vote for best hamster and battle with hamsters by clicking on battle button!
          </h3>
        <h3>
        <Link to="/Gallery"> GO TO GALLERY
        </Link> Here you can see all hamster and add + Delete hamsters from image  gallery! 
            
         </h3>
      </div>
    </main>
  </div>
);

export default Start;