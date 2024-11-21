import React from 'react'
import { useState } from 'react';
import axios from "axios";

export default function C20241121() {
    
    let defaultList = [{
        id : ""
        ,name : ""
    }];
    const [tempList, setTempList] = useState(defaultList);

    const getTest = () => {
        axios.get("http://localhost:3000/students")
        .then((response) => {
            console.log(JSON.stringify(response.data));
            setTempList(response.data)
        })
        .catch((error) => {
            console.log(error);
        })


    }
    getTest();

  return (
    <>
        <div>{tempList.map((each) =><div><input value={each.name}></input></div>)}</div>
    </>
    
  )
}
