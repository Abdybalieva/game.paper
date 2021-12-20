import React, {useState} from 'react';
import Paper from "./Paper";
import GuessNum from "./GuessNum";

const App = () => {
    const [game, setGame] = useState(null)

    return (
        <div className="container">
            {
                !game && <div className="block">
                    <button className="button-paper" onClick={() => setGame(1)} type="button">Камень, ножницы, бумага</button>

                    <button className="button-check-num" onClick={() => setGame(2)} type="button">Угадайте число</button>
                </div>
            }
            {game === 1 && <Paper/>}
            {game === 2 && <GuessNum/>}
        </div>
    )
}
export default App;