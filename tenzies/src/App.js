import './App.css';
import Die from './components/die/Die'
import { useState } from 'react'

function App() {
  const allNewDice = () => {
    let result = []
    for (let i = 0; i < 10; i++) {
      result.push(Math.floor(Math.random() * 6) + 1)
    }
    return result
  }
  const [numbers, setNumbers] = useState(allNewDice())
  console.log(allNewDice())
  return (
    <div className="App">
      <h2>Tenzies App</h2>
      <div className='container'>
        {numbers.map((num) => {
          return <Die value={num} />
        })}
      </div>

    </div>
  );
}

export default App;
