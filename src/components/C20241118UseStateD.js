import React from 'react'
import {useState} from 'react'

//이름을 use로 시작해야한다!!!
function useInput(){ //함수에 use만 쓰면 custom Hook 사용 가능하다!
    const [input, setInput] = useState("");
    const onChange = (e) => {
        setInput(e.target.value);
    }
    return [input, onChange];
}


export default function C20241118UseStateD() {
    
    const [input1, onChange1] = useInput();
    const [input2, onChange2] = useInput();
    
    return (
    <>
        <div>
            <input
            value={input1}
            onChange={onChange1}
            />
            <div>{input1}</div>

            <input
            value={input2}
            onChange={onChange2}
            />
            <div>{input2}</div>
        </div>
    </>
    
  )
}
