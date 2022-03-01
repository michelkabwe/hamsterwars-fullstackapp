import React, {useState, useEffect} from "react";
import Hamster from './Hamster'
import './HamsterCard.css';


const HamsterCard = ({hamsterItems}) => {
    const [hamsters, setHamsters] = useState([])

    useEffect(() => {
        async function get(){
        const response = await fetch('/hamsters', {method: 'GET',})
        const data = await response.json() 
        setHamsters(data)
        console.log(data)
     
        } 
       get()    
    }, [hamsterItems]  );
    
  

    return (
      //Skicka in id i delete funktionen
        <div className="container"> 
           <div className="hamster-card">
            {hamsters.map((hamster) => (
            <Hamster hamster={hamster}    //renderar hamsters.. En hamsters för varje hamster§
            key={hamster.id} />  
            ))
            }
          </div>
         
        </div>    
     
    )
}

export default HamsterCard;
