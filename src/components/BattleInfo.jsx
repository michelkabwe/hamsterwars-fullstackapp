import './Battle.css'
import { Link } from 'react-router-dom'
import BattleResult from './BattleResult'
import { useState } from 'react'

const BattleInfo = ({ hamster1, hamster2, getRandomHamster }) => {
    const [winningHamster, setWinningHamster] = useState("");
    const [losingHamster, setLosingHamster] = useState("");
    const [showPopUp, setShowPopUp] = useState(false);

    async function hamsterVote(winner, loser) {

        const winnerUpdate = {
            wins: winner.wins + 1,
            games: winner.games + 1
        }
        const loserUpdate = {
            defeats: loser.defeats + 1,
            games: loser.games + 1
        }
        Promise.all([
            updateHamster(winner.id, winnerUpdate),
            updateHamster(loser.id, loserUpdate),
            postMatch(winner.id, loser.id),

        ]).then(() => {
            console.log("Winner loser updated")
            setWinningHamster(winner)
            setLosingHamster(loser)
            popUp();
        })
    }

    async function updateHamster(id, hamsterChange) {
        const Response = await fetch(`/hamsters/${id}`, {
            method: 'PUT', headers: {
                'Content-type': 'application/json'
            }, body: JSON.stringify(hamsterChange)
        });
        const Data = await Response.text();
        console.log(Data);
    }

    async function postMatch(winnerId, loserId) {
        const match = { winnerId, loserId }
        const Response1 = await fetch(`/matches`, {
            method: 'POST', headers: {
                'Content-type': 'application/json'
            }, body: JSON.stringify(match)
        });
        const Data1 = await Response1.text();
        console.log(Data1);
    }

    function popUp() {
        setShowPopUp(true);
        setTimeout(setShowPopUp, 2000);
        setTimeout(getRandomHamster(), 7000);
    }

    return (
        <main>
            <section className="wrapper">

                <p className="vote">Vote your favorite hamster by clicking on the image!</p>
                <div className="buttonwrapper">
                    <Link to='/Battle'>
                        <p onClick={() => {
                            getRandomHamster();
                            setShowPopUp(false)
                        }}>Click here to Rumble!</p>
                    </Link>
                </div>
                <section className="random">

                    <div onClick={() => hamsterVote(hamster1, hamster2)}>
                        <p><span>{hamster1.name}</span></p>
                        <img src={`/img/${hamster1.imgName}`} alt={hamster1.imgName} className="random-image" />
                        
                  <p>Years: {hamster1.age}</p>
					
                    <p>Wins: {hamster1.wins}</p>
	                <p>Losses: {hamster1.defeats}</p>
					<p>Favfood: {hamster1.favFood}</p>
					<p>Loves: {hamster1.loves}</p>
					
                    </div>
                    <h1>VS</h1>
                    <div onClick={() => hamsterVote(hamster2, hamster1)}>
                        <p><span>{hamster2.name}</span></p>
                        <img src={`/img/${hamster2.imgName}`} alt={hamster2.imgName} className="random-image" />
                        <p></p>
                        <p>Years: {hamster2.age}</p>
                        <p>Favfood: {hamster2.favFood}</p>
                        <p>Loves: {hamster2.loves}</p>
                   
                    </div>

                    {
                        winningHamster && losingHamster && showPopUp
                            ? <BattleResult winner={winningHamster} loser={losingHamster} />
                            : ""
                    }

                </section>
               
            </section>
        </main>
    )
}

export default BattleInfo