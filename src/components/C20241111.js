import React from 'react'

//여기에서도 component import해줄 수 있다!

export default function C20241111(props) {
  return (
    <>
      <div>C20241111 : {props.name}!!22</div>
      <div>obj.name = {props.obj.name}</div>
      <div>obj.name1 = {props.obj.name1}</div>
      <div>obj.number = {props.obj.number}</div>
    </>
  )
}