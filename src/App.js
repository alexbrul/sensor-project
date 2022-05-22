import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import Box from './components/grid/Box.js'
import GridCase1 from './components/grid/GridCase1.js'
import Elderly from './components/elderly/Elderly.js'
import {GetBathroom2Hook} from './disruptiveAPIAcces.js'



function App() {
  const [casenr, setCaseNr] = useState(1);
  ///const [bathRoom1] = GetBathroomOneHook();

  const BATHROOM_SENSORID2 = 'bj9tmr3fvtng00a964j0'
  const baderomEn= 'bj9tpt41bddg00fbmi6g'
  const [bathRoom1, lastDate1, fromNow1] = GetBathroom2Hook(baderomEn);
  const [bathRoom2, lastDate2, fromNow2] = GetBathroom2Hook(BATHROOM_SENSORID2);


  return (
    <div className="App">
      <header className="App-header">

        <div className="App-case" onClick={() => setCaseNr(1)}>Locate patients/elderly during Fire</div>
         <div className="App-case" onClick={() => setCaseNr(2)}>Monitoring of seniors at home</div>
      </header>
      <div>baderom1 timefromnow: {fromNow1}</div>
      <div>baderom2 timefromnow: {fromNow2}</div>




      {casenr==1 && <GridCase1/>}
      {casenr==2 && <Elderly/>}

    </div>
    
    
  );
}

export default App;
