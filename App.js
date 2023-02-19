import React from "react";
import ReactDOM from "react-dom/client ";
const heading3 = <h1>ok good</h1>;
const FunctionalComponent = ()=>{
  return <><h1>What's up</h1></>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent/>);


// const heading = React.createElement("h1", {class:'ok'}, "i am learning yo");
// console.log(heading,'headingheading')
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
