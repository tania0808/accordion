import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => {
    setIsOpen(!isOpen)
  }
  return (
    <section>
      <header>
        <h4>{title}</h4>
        <button onClick={toggleButton}>
          <p>{isOpen ? <AiOutlineMinus/> : <AiOutlinePlus/> }</p>
        </button>
      </header>
        <p className={isOpen ? "d-block" : "d-hidden"}>{info}</p>
    </section>
  );
};

export default Question;
