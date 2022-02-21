import './App.css';
import Die from './components/die/Die'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'



function App() {
  const { width, height } = useWindowSize()

  const allNewDice = () => {
    let result = []
    for (let i = 0; i < 10; i++) {
      result.push(generateNewDie())
    }
    return result
  }

  const generateNewDie = () => {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid()
    }
  }


  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)


  useEffect(() => {
    const firstValue = dice[0].value
    const allValue = dice.every(die => die.value === firstValue)
    if (dice.every(die => die.isHeld) && allValue) {
      setTenzies(true)
      console.log("You Won!")
    }
  }, [dice])


  const rollDice = (id) => {
    setDice(oldDice => oldDice.map((num) => {
      return num.isHeld ? num : generateNewDie()
    }))
  }

  const holdDice = (id) => {
    setDice(oldDice => oldDice.map((num) => {
      return num.id === id ?
        { ...num, isHeld: !num.isHeld } : num
    }))
  }

  const buttonTitle = tenzies === true ? <button className='roll-dice' onClick={rollDice}>New Game</button> : <button className='roll-dice' onClick={rollDice}>Roll Dice</button>



  return (
    <div className="App">
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className='container'>
        {dice.map((num) => {
          return <Die id={num.id} key={num.id} isHeld={num.isHeld} value={num.value} hold={() => holdDice(num.id)} />
        })}
      </div>
      {tenzies === true ? <Confetti width={width} height={height} /> : null}
      <button className='roll-dice' onClick={rollDice}>{buttonTitle}</button>
    </div>
  );
}

export default App;
