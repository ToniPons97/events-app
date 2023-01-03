import './App.css';
import ClickCounter from './components/ClickCounter';

const onChange = (count) => {
  console.log(`The current counter value is ${count}`);
}

function App() {
  return <ClickCounter onCounterChange={onChange}/>;
}

export default App;