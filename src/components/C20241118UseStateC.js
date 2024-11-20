import React from 'react'
import {useState} from 'react'

export default function C20241118UseStateC() {

    //input 하나에 정리
    const [input, setInput] = useState({
        name : ""
        ,birth : ""
        ,gender : ""
    });

    // 밑에 3개를 이렇게 한 번에 쓸 수도 있다! setInput 안에 [e.target.name] 하고 return 쪽에 함수 바꿔주고 
    const onChangeInput = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    }
    // const onChangeName = (e) => {
    //     setInput({
    //         ...input,
    //         name : e.target.value
    //     });
    // }

    // const onChangeBirth = (e) => {
    //     setInput({
    //         ...input,
    //         birth : e.target.value
    //     });
    // }

    // const onChangeGender = (e) => {
    //     setInput({
    //         ...input,
    //         gender : e.target.value
    //     });
    // }
  return (
    <>
        <input
            value={input.name} //input이라는 객체의 필드로 구성되어있으니까 name 대신 input.name
            placeholder="입력하세요!"
            onChange={onChangeInput}
            type="text"
            />
            <div>{input.name}</div>
        <input
            value={input.birth}
            placeholder="입력하세요!"
            onChange={onChangeInput}
            type="date"
            />
            <div>{input.birth}</div>
        
        <select onChange={onChangeInput}>
            <option value="M">남</option>
            <option value="F">여</option>
        </select>
        <div>{input.gender}</div>
    </>
    
  )
}
