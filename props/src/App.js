
import './App.css'
import Raoni from './components/Raoni'
import Frase from './components/Frese';
import SayMyName from './components/SayMyName';

function App() {

    return (
    <div className="App">
        <Raoni/>
        <Frase/>
        <SayMyName nome="Raoni"/>
        <SayMyName nome="Maria"/>
    </div>
  );
}

export default App;
