import React from 'react'
import { useState } from "react";

/// *********제일 제일 중요함***********
// 함수 컴포넌트 내부에서만 호출 가능!
// 조건문 반복문에서는 호출 불가
// 커스텀 훅 만들기 가능!

export default function C20241118UseStateB() {
    // 여기에서만 호출이 가능합니다!!
    // const [a,b] = useState(0);
    
    const [name, setName] = useState("");
    const onChangeName = (e) => { //event 파라미터
        setName(e.target.value);
    }

    const [birth, setBirth] = useState("");
    const onChangeBirth = (e) => { //event 파라미터
        setBirth(e.target.value);
    }


    const [gender, setGender] = useState("");
    const onChangeGender = (e) => { //event 파라미터
        setGender(e.target.value);
    }


  return (
    <>
        <input
            value={name}
            placeholder="입력하세요!"
            onChange={onChangeName}
            type="text"
            />
            <div>{name}</div>
        <input
            value={birth}
            placeholder="입력하세요!"
            onChange={onChangeBirth}
            type="date"
            />
            <div>{birth}</div>
        
        <select onChange={onChangeGender}>
            <option value="M">남</option>
            <option value="F">여</option>
        </select>
        <div>{gender}</div>
    </>
    
  )
}
