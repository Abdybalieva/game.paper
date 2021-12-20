import {useState} from "react";
import rock from "../image/3.jpg"
import paper from "../image/2.webp"
import scissor from "../image/1.jpg"


const Paper = () => {
    const images = {
        "Камень": rock,
        "Ножницы": scissor,
        "Бумага": paper
    }
    const playerInitial = (+localStorage.getItem('resultPlayer') || 0)
    const compInitial = (+localStorage.getItem('resultComp') || 0)

    const [player, setPlayer] = useState("")
    const [compStr, setComp] = useState("")
    const [res, setRes] = useState("")
    const [playerScore, setPlayerScore] = useState(playerInitial)
    const [compScore, setCompScore] = useState(compInitial)


    const playClick = (playAction) => {
        const actions = ["Камень", "Ножницы", "Бумага"]
        const compActions = actions[Math.floor(Math.random() * 3)]

        if (playAction === compActions) {
            setRes('Ничья')
        } else if ((playAction === "Камень" && compActions === "Ножницы")
            || (playAction === "Бумага" && compActions === "Ножницы")
            ||( playAction === "Камень" && compActions === "Бумага")
        ) {
            setRes("Вы выиграли!")
            setPlayerScore(playerScore + 1)
            localStorage.setItem('resultPlayer', String(playerScore + 1))
        } else {
            setRes("Вы проиграли!")
            setCompScore(compScore + 1)
            localStorage.setItem('resultComp', String(compScore + 1))
        }
        setPlayer(images[playAction])
        setComp(images[compActions])
    }
    const cleanScore = () => {
        localStorage.clear()
        setPlayerScore("")
        setCompScore("")
    }
    return (
        <div className="rock">
            <div className="rock-box">
                <div className="row">
                    <div className="col-6" >Игрок:{playerScore}
                        <div className="game-box">
                            {<img src={player} alt=""/>}
                        </div>
                    </div>
                    <div className="col-6">Компьютер:{compScore}
                        <div className="game-box">
                            {<img src={compStr} alt=""/>}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span className="res">{res}</span>
            </div>
            <div className="rock-button">
                <button type="button" onClick={() => playClick("Камень")}>Камень</button>
                <button type="button" onClick={() => playClick("Ножницы")}>Ножницы</button>
                <button type="button" onClick={() => playClick("Бумага")}>Бумага</button>
            </div>
            <button className="clean-btn" onClick={cleanScore}>Clean</button>
        </div>
    )
}
export default Paper
