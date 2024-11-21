import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function List() {
  const defaultList = [
    {
      id: "",
      name: ""
    }
  ];

  const [tempList, setTempList] = useState(defaultList);

  const getTest = () => {
    axios.get("https://2024oss-react-m1bsbxiai-youngjuns-projects-09775b66.vercel.app/my_data.json")
      .then((response) => {
        console.log("데이터 로드 성공:", JSON.stringify(response.data));
        setTempList(response.data.students); // students 배열 사용
      })
      .catch((error) => {
        console.error("데이터를 불러오는 중 문제가 발생했습니다:", error);
      });
  };

  // 초기 렌더링 시 API 호출
  useEffect(() => {
    getTest();
  }, []);

  return (
    <>
      <div>목록이에요!</div>
      <div>
        {tempList.map((each, index) => (
          <div key={each.id || index}>
            <input value={each.name} readOnly />
          </div>
        ))}
      </div>
    </>
  );
}
