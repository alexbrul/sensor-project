import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Box from './components/grid/Box.js'
import GridCase1 from './components/grid/GridCase1.js'
import Elderly from './components/elderly/Elderly.js'


function App() {

  const [casenr, setCaseNr] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-case" onClick={() => setCaseNr(1)}>Locate patients/elderly during Fire</div>
         <div className="App-case" onClick={() => setCaseNr(2)}>Monitoring of seniors at home</div>
      </header>
      {casenr==1 && <GridCase1/>}
      {casenr==2 && <Elderly/>}

    </div>
    
    
  );
}

export default App;
