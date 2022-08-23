import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <div className="box">
      <div className="container">
        <h1 className="heading">Questions and answers about login</h1>
        <div className="accordion">
          {
            data.map(item => {
              return <SingleQuestion key={item.id} {...item}/>
            })
          }
        </div>
        <div className="rectangle"></div>
        <div className="angle"></div>
      </div>
    </div>
  );
}

export default App;
