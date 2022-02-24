
import React, {useState} from "react";
import HamsterCard from './HamsterCard'
import './AddHamster.css';

const AddHamster = () => {


    const [name, setname ] = useState('')
    const [age, setage ] = useState('')
    const [favFood, setfavFood ] = useState('')
    const [loves, setLoves ] = useState('')
    const [imgName, setImgName ] = useState('')
    const [wins, setWins ] = useState('')
    const [defeats, setDefeats ] = useState('')
    const [games, setGames ] = useState('')
    const [hamsterItems, setHamsterItems] = useState([])
    
        async function handleAddHamster(){

            const newHamster = {
            name: name,
            age: Number(age),
            favFood: favFood,
            loves: loves,
            imgName: imgName,
            wins:Number(wins),
            defeats: Number(defeats),
            games: Number(games)

           }
           console.log(newHamster, 'newHamster')
   
        const response = await fetch('/hamsters ', {method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newHamster) 
        })
        const data = await response.json()
        console.log(data, "this is a data response");
        if (response.status === 200){
            setHamsterItems([...hamsterItems, newHamster])
            setname('')
            setage('')
            setfavFood('')
            setLoves('')
            setImgName('') 
            setWins('')
            setDefeats('')
            setGames('')
        
        }       
    }

  return(
        <div className="add-todo-wrapper">
            <form onSubmit={(e) => e.preventDefault()}>
            <label>name
                <input type="text" 
                name="id"  
                value={name}
                onChange={e => setname(e.target.value)} />
            </label>
                <label>age
                <input type="text" 
                name="id" 
                value={age}
                onChange={e => setage(e.target.value)} />
            </label>
            <label>favFood
                <input type="text" 
                name="id" 
                value={favFood}
                onChange={e => setfavFood(e.target.value)} />
            </label>
            <label>Loves
                <input type="text" 
                name="id" 
                value={loves}
                onChange={e => setLoves(e.target.value)} />
            </label>
            <label>Image
                <input type="text" 
                name="id" 
                value={imgName}
                onChange={e => setImgName(e.target.value)} />
            </label>
            </form>
            <button onClick={() => handleAddHamster()}>ADD</button>
            <HamsterCard hamsterItems={hamsterItems}/>
        </div>
        
    )

}
export default AddHamster;