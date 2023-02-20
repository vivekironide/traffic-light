import { Breadcrumb, Checkbox } from "antd";
import { Content }              from "antd/es/layout/layout";
import { useState } from "react";
import * as React              from "react";
import "./traffic-light.css";

export default function TrafficLight() {
  const [red, setRed] = useState(true)
  const [yellow, setYellow] = useState(false)
  const [green, setGreen] = useState(false)
  let timeOut = '';
  
  const handleRedColor = () => {
    setRed(true)
    setYellow(false)
    setGreen(false)
  }
  
  const handleYellowColor = () => {
    setRed(false)
    setYellow(true)
    setGreen(false)
  }
  
  const handleGreenColor = () => {
    setRed(false)
    setYellow(false)
    setGreen(true)
  }
  
  const onChange = (e) => {
    if(e.target.checked) {
      setTimeout(changeColorRed, 1000);
    } else {
      console.log('hello')
      clearTimeout(timeOut);
    }
    console.log(`checked = ${e.target.checked}`);
  };
  
  const changeColorRed = () => {
    handleYellowColor();
    timeOut = setTimeout(changeColorYellow, 1000);
  };
  
  const changeColorYellow = () => {
    handleGreenColor();
    timeOut = setTimeout(changeColorGreen, 2000);
  };
  
  const changeColorGreen = () => {
    handleRedColor();
    timeOut = setTimeout(changeColorRed, 1000);
  };
  
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Traffic Light</Breadcrumb.Item>
      </Breadcrumb>
      
      <Content className={"wrapper"}>
        <div className={"traffic-light"}>
          <div className={"light"} style={{backgroundColor: red ? "#FF0000" : "#b30000", boxShadow: red && "0 0 6em #ff3333"}} onClick={handleRedColor}></div>
          <div className={"light"} style={{backgroundColor: yellow ? "#FFFF00" : "#b2b300", boxShadow: yellow && "0 0 6em #ffff33"}} onClick={handleYellowColor}></div>
          <div className={"light"} style={{backgroundColor: green ? "#00FF00" : "#00b300", boxShadow: green && "0 0 6em #33ff33"}} onClick={handleGreenColor}></div>
        </div>
        <Checkbox onChange={onChange}>Automate</Checkbox>
      </Content>
    </>
  )
}
