import './App.css';
import Die from './components/die/Die'

function App() {
  const allNewDice = () => {
    let result = []
    for (let i = 0; i < 10; i++) {
      result.push(Math.floor(Math.random() * 6) + 1)
    }
    return result
  }
  console.log(allNewDice())
  return (
    <div className="App">
      <h2>Tenzies App</h2>
      <div className='container'>
        <Die value='5' />
        <Die value='3' />
        <Die value='3' />
        <Die value='3' />
        <Die value='4' />
        <Die value='2' />
        <Die value='5' />
        <Die value='5' />
        <Die value='5' />
        <Die value='3' />
      </div>

    </div>
  );
}

export default App;
