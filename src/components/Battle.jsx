import React, {useState, useEffect} from "react";
import './HamsterCard.css';
import BattleInfo from "./BattleInfo";

const Battle = () => {
const [hamster1, setHamster1] = useState(null)
  const [hamster2, setHamster2] = useState(null)
   
    useEffect(() => {
        getRandomHamster()
    }, []  );

        async function getRandomHamster(){
        const response1 = await fetch('/hamsters/random', {method: 'GET',})
        const data1 = await response1.json() 
        setHamster1(data1)
        console.log(data1)

        const response2 = await fetch('/hamsters/random', {method: 'GET',})
        const data2 = await response2.json() 
        setHamster2(data2)
        console.log(data2)
        } 
      
 

        let showBattleData = false
        if(hamster1 != null && hamster2 != null) {
            showBattleData = true
        }
  

    return (
        <div className="container"> 
<           div className="hamsters-batlle">
                {showBattleData ?
                <div>
                    <BattleInfo 
                    hamster1={hamster1}
                    hamster2={hamster2}
                    getRandomHamster={getRandomHamster}/>
                </div>
                : <p>No Battle</p>
                }
                </div>

                </div>    
     
    )
}

export default Battle;
