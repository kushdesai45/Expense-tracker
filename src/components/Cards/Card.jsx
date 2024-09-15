import React from 'react';
import './Card.css';


export default function Card(props) {
    let {text,btnText,btnClass} = props;
  return (
    <div className='cardContainer'>
        <div>{text}: <span style={ btnClass == 'incomeBtn' ? {color: "#9DFF5B"} : {color: "#F4BB4A"}}>₹4500</span></div>
        <button className={btnClass}><span style={{paddingRight:"4px"}}>+</span>{btnText}</button>
    </div>
  )
}
