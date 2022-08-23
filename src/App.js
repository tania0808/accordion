import React from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  return (
    <main>
      <div className="container">
        <h1>Questions and answers about login</h1>
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
    </main>
  );
}

export default App;
