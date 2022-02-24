import React, {useState} from "react";
const Hamster = ({name, age, favFood, hamster}) => {
 
   const [hamsterDeleted, setHamsterDeleted] = useState(false)
   const [IsShowing, setIsShowing] = useState(false)


    async function deleteHamster(id) {
        const response = await fetch(`/hamsters/${id}`, { method: "DELETE" });
        setHamsterDeleted(true)
    
        }

        function handleMouseEnter(e){
            if( setIsShowing(e.target)){
                return IsShowing
            }
           
            console.log(IsShowing , 'hello')
       

        }
   
         return (
               hamsterDeleted ? null : (  
                      <div className="hamster-info-container">
                <button onClick={() => deleteHamster(hamster.id)}>Delete</button>
                <div className="hamster-info-text" 
                 onMouseEnter={handleMouseEnter}> 
                    <h2>{hamster.name}</h2> 
                    <p>Ålder:{hamster.age}</p> 
                    <p>Favorit mat:{hamster.favFood}</p> 
                    <p>I love:{hamster.loves}</p>    
                    </div>
                 
                    <img src={'./img/' + hamster.imgName} alt="hamster"/> 
               
                </div>
              ))
        } 
    
       
    

export default Hamster;

