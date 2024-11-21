import React from 'react';
import { useState } from 'react';
import axios from "axios";

export default function List() {

  let defaultList = [];
  const [tempList, setTempList] = useState(defaultList);

  const getTest = () => {
    axios.get("https://2024oss-react-7e52hf6kv-youngjuns-projects-09775b66.vercel.app/my_data.json")
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
      <div>목록이에요!</div>
      <div>{tempList.map((each) => <div><input value={each.name}></input></div>)}</div>
    </>

  )
}