import React, {useState} from 'react';

const CheckGame = () => {
    const [message, setMessage] = useState("")
    const [inputNum, setInput] = useState("")
    const [num, setNum] = useState(Math.ceil(Math.random() * 10))
    const [attempt, setAttempt] = useState(3)
    const [res, setRes] = useState(+localStorage.getItem("won"))
    const [comRes, setCompRes] = useState(+localStorage.getItem("lost"))
    const [help, toggleHelp] = useState(false)

    const inp = (e) => {
        const n = Math.max(Math.min(+e.target.value,10),0) || ""
        setInput(n)
    }

    const buttonCheck = () => {
        if (num === +inputNum) {
            setMessage('Вы угадали!')
            setAttempt(0)
            setRes(res + 1)
            localStorage.setItem("won", String(res + 1))
        } else {
            if (attempt - 1 === 0) {
                setMessage("Вы проиграли!")
                setCompRes(comRes + 1)
                localStorage.setItem("lost", String(comRes + 1))
            } else {
                if (help){
                setMessage(inputNum > num ? "Перебор" : "Недобор")
            }else {
                    setMessage("Попробуйте еще раз")
                }
            }
            setAttempt(attempt - 1)
        }
        setInput("")
    }

    const playAgain = () => {
        setAttempt(3)
        setNum(Math.ceil(Math.random() * 10))
        setMessage("")


    }
    const clear = () =>{
        setNum(Math.ceil(Math.random() * 10))
        setAttempt(3)
        setMessage("")
        localStorage.clear()
        setRes(+localStorage.getItem("won"))
        setCompRes(+localStorage.getItem("lost"))
    }
    const turnHelp = (e) =>{
        toggleHelp(e.target.checked)
    }

    return (
        <div>
            <input value={inputNum}  onChange={inp} type="text"/>
            {!!attempt && <button disabled={!inputNum}  type="button"  onClick={buttonCheck}>Check</button>}
            {!attempt && <button  onClick={playAgain}>Начать заново</button>}
            <label>
            <input onChange={turnHelp} type="checkbox"/>
                С подсказками
            </label>
            <div>Попытки:{attempt}</div>
            <div>{message}</div>
            <div>победы:{res}</div>
            <div>поражения:{comRes}</div>
            <button onClick={clear}>Clear</button>
        </div>
    )
}

export default CheckGame;