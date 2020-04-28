import React, { Component } from "react";
import Singers from "./Singers";
import Pianists from "./Pianists";

class Display extends Component {
  render(){
    return(
    <div>
     <Singers name="Eric Clapton" age="74"/>
     <Singers name="Jimmy Hendrix" age="27"/>
     <Pianists name="Dinu Lipatti" instrument="Pleyel"/>
      </div>
  )
  }
}

export default Display;