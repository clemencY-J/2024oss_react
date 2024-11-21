import './App.css';
import Router from './components/Router.js'

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