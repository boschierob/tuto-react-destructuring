import React from "react";

const Singers = ({name,age}) => {

console.log(name,age)
    return(
      <div>
        <p>Singers : {name}</p>
        <p>ce chanteurs a {age}</p>
      </div>
    )


  
}

export default Singers;