import React from "react";
import ReactDOM from "react-dom/client ";
const heading1 = React.createElement('h1',{key:'1'},'i am parcel')
    const heading2 = React.createElement('h2',{key:'2'},'i am h2')
    const div = React.createElement('div',{},[heading1,heading2])
    const root =  ReactDOM.createRoot(document.getElementById("root"));
    root.render(div)


      // const heading = React.createElement("h1", {class:'ok'}, "i am learning yo");
      // console.log(heading,'headingheading')
      // const root = ReactDOM.createRoot(document.getElementById("root"));
      // root.render(heading);