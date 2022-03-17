
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
    const [nameTouched, setNameTouched] = useState(false)
    const [ageTouched, setAgeTouched] = useState(false)
    const [favFoodTouched, setfavFoodTouched] = useState(false)
    const [lovesTouched, setLovesTouched] = useState(false)
    const [imgNameTouched, setImgNameTouched] = useState(false)

        //Valid name
        let nameIsValid = true;
        let nameErrorMessage = '';
        if( name === ''){
            nameIsValid = false;
            nameErrorMessage = 'Please add hamster name!'
        }
        let nameClass = ''
        if(nameTouched) {
            nameClass = (nameIsValid ? 'valid ' : 'error')
        } 
        //Valid age
        let ageIsValid = true;
        let ageErrorMessage = ''
        if( age === ''){
            ageIsValid = false;
            ageErrorMessage = 'Please add hamster name!'
        }
        let ageClass = ''
        if(ageTouched) {
            ageClass = (ageIsValid ? 'valid ' : 'error')
        } 
        
        //Valid favFood
        let favFoodIsValid = true;
        let favFoodErrorMessage = ''
        if( favFood === ''){
            favFoodIsValid = false;
            favFoodErrorMessage = 'Please add hamster name!'
        }
        let favFoodClass = ''
        if(favFoodTouched) {
            favFoodClass = (favFoodIsValid ? 'valid ' : 'error')
        } 
        //Valid Loves
        let lovesIsValid = true;
        let lovesErrorMessage = ''
        if( loves === ''){
            lovesIsValid = false;
            lovesErrorMessage = 'Please add hamster name!'
        }
        let lovesClass = ''
        if(lovesTouched) {
            lovesClass = (lovesIsValid ? 'valid ' : 'error')
        } 
        //valid imgName 
        let imgNameIsValid = true;
        let imgNameErrorMessage = ''
        if( imgName === ''){
            imgNameIsValid = false;
            imgNameErrorMessage = 'Please add hamster name!'
        }
        let imgNameClass = ''
        if(imgNameTouched) {
            imgNameClass = (lovesIsValid ? 'valid ' : 'error')
        } 
        

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
            <form onSubmit={(e) => e.preventDefault()} className="form-box">
            <label>name
                <input type="text" 
                name="id"
                value={name}
                onBlur={()=> setNameTouched(true)}
                className={nameClass}
                onChange={e => setname(e.target.value)} />
                 {nameTouched ? <div className="message">{ageErrorMessage}</div> : null}
            </label>
                <label>age
                <input type="text"  
                name="id" 
                value={age}
                onBlur={()=> setAgeTouched(true)}
                className={ageClass}
                onChange={e => setage(e.target.value)} />
                {ageTouched ? <div className="message">{ageErrorMessage}</div> : null}
            </label>
            <label>favFood
                <input type="text" 
                name="id" 
                value={favFood}
                onBlur={()=> setfavFoodTouched(true)}
                className={favFoodClass}
                onChange={e => setfavFood(e.target.value)} />
                {favFoodTouched ? <div className="message">{nameErrorMessage}</div> : null}
            </label>
            <label>Loves
                <input type="text" 
                name="id" 
                value={loves}
                onBlur={()=> setLovesTouched(true)}
                className={lovesClass}
                onChange={e => setLoves(e.target.value)} />
                {lovesTouched ? <div className="message">{lovesErrorMessage}</div> : null}

            </label>
            <label>Image
                <input type="text" 
                name="id" 
                value={imgName}
                onBlur={()=> setImgNameTouched(true)}
                className={imgNameClass}
                onChange={e => setImgName(e.target.value)} />
                {imgNameTouched ? <div className="message">{imgNameErrorMessage}</div> : null}

            </label>
            </form>
            <button onClick={() => handleAddHamster()}>ADD</button>
            <HamsterCard hamsterItems={hamsterItems}/>
        </div>
        
    )

}
export default AddHamster;