import React from 'react'

import { useState } from "react";
//useState 훅을 사용하기 위해서는 필수적으로 선언해야 한다!

export default function C20241118UseStateA() {

    // const arrayState= useState(0); //파라미터 안의 값은 초기값 설정!
    // //첫 번째 값은 실제 상태값, 상태를 변경할 수 있는 함수 이렇게 2개를 배열로 선언!
    // const state = arrayState[0];
    // const setState = arrayState[1];
    // 하지만 우리는 구조 분해 할당을 배웠으므로 아래 코드로 선언!
    // const [state, setState] = useState(0);
    // console.log("now state" + state);

    const [count, setCount] = useState(0);
    const [light, setLight] = useState("OFF"); // js 값 어떤 것이든 들어올 수 있다.


    return (
        <>
            <div>C20241118UseStateA : {count}</div>
            <button onClick={() => {
                setCount(count + 1);
            }}>+1</button>

            <div>LIGHT : {light}</div>
            <button onClick={() => {
                setLight(light === "ON" ? "OFF":"ON");
            }}>{light}</button>
        </>

    )
}
