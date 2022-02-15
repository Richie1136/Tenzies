import './App.css';
import Die from './components/die/Die'

function App() {
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
