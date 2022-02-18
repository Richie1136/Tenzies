import './App.css';
import Die from './components/die/Die'
import { useState } from 'react'
import { nanoid } from 'nanoid'

function App() {
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

  const [numbers, setNumbers] = useState(allNewDice())

  const rollDice = (id) => {
    setNumbers(oldDice => oldDice.map((num) => {
      return num.isHeld ? num : generateNewDie()
    }))
  }

  const holdDice = (id) => {
    setNumbers(oldDice => oldDice.map((num) => {
      return num.id === id ?
        { ...num, isHeld: !num.isHeld } : num
    }))
  }

  return (
    <div className="App">
      <h2>Tenzies App</h2>
      <div className='container'>
        {numbers.map((num) => {
          return <Die id={num.id} key={num.id} isHeld={num.isHeld} value={num.value} hold={() => holdDice(num.id)} />

        })}
      </div>
      <button className='roll-dice' onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default App;
