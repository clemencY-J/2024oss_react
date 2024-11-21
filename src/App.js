import logo from './logo.svg';
import './App.css';
import Componentc from './components/Componentc.js';
import Componentf from './components/Componentf.js';
import Hello from './components/Hello.js';
import C20241111 from './components/C20241111.js';
import C20241114a from './components/C20241114a.js';
import Router from './components/Router.js'
import C20241118a from './components/C20241118a.js';
import C20241118UseStateA from './components/C20241118UseStateA.js';
import C20241118UseStateB from './components/C20241118UseStateB.js';
import C20241118UseStateC from './components/C20241118UseStateC.js';
import C20241118UseStateD from './components/C20241118UseStateD.js';
import C20241121 from './components/C20241121.js';

function App() {

  const tempName= "test1"; 
  const tempObj = {
    name : "name1"
    , number : 101
  };

  return (
    <>
      <Router />
      {/* <Hello name="hahaha" />
      <C20241114a /> */}
      {/* <C20241118a title="12345"/>
      <C20241118UseStateA /> */}
      {/* <C20241118UseStateB /> */}
      {/* <C20241121 /> */}
    </>
  );
}

export default App;