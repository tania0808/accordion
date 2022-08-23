import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="question-box">
      <div className="question">
        <h4>{title}</h4>
        <p className={isOpen ? "d-block" : "d-hidden"}>{info}</p>
      </div>
      <button className="btn" onClick={toggleButton}>
        <p className="sign">{isOpen ? <AiOutlineMinus/> : <AiOutlinePlus/> }</p>
      </button>
    </div>
  );
};

export default Question;
