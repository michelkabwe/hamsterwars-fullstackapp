import React, {useState, useEffect} from "react";
import Hamster from './Hamster'
import './HamsterCard.css';


const HamsterCard = ({hamsterItems}) => {
    const [hamsters, setHamsters] = useState([])

    useEffect(() => {
        async function get(){
        const response = await fetch('/hamsters', {method: 'GET',})
        //fetchar och tar emot data i reponsens
        const data = await response.json() //Data
        setHamsters(data)
        console.log(data)
     
        } 
       get()    
    }, [hamsterItems]  );
    
  

    return (
      //pass the id inside of the delete function to which id to delete
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
