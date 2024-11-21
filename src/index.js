import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// 여기서 많이 선언했지만 보통 Index.js 말고 App.js를 수정해서 한다!
//JSX style tag
const myElement01 = <div>112233</div>;

//JSX 
const myElement02 = (
  <>
    <h1>I love JSX!</h1>
    <h2>rgrg</h2>
  </>
);
const myElement02_01 = (
  <ul>
    <li>first</li>
    <li>second</li>
    <li>end</li>
  </ul>
);
  
//without JSX
const myElement03 = React.createElement('h1', {}, 'I do not use JSX!');

//표현식 사용1
const myElement04 = <div>hello!! 5+5 = {5+5}</div>; // {}는 숫자를 의미

//표현식 사용2
let sum = 0;
for(let i=0;i<100;i++){
  sum += (i+1);
}
const myElement05 = <div>hello! one to one hundred sum = {sum}</div>;

//표현식 사용3
sum += 7000;
const myElement06 = <div>{(sum) < 6000 ? "under 6000" : "over 6000"}</div>;

//input tag
const myElement07 = <input type="date" />
const myElement07_01 = (
  <>
  <div className="classtest">오늘의 날짜를 입력해주세요!</div>
  <input style={{padding:"50px"}} type="date" />
  </>
);

//css inline
const myElement08 = <input style={{padding:"50px"}} type="date" />

//css multiple
const myStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Sans-Serif"
};
const myElement09 = <div style={myStyle}>112233</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   {/* myElement09 */}
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
