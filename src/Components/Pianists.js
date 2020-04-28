import React, { Component } from "react";

class Pianists extends Component {
  render() {
    const { name, instrument } = this.props;
    return (
      <div>
        <p>
          Pianiste: {name} joue sur {instrument}
        </p>
      </div>
    );
  }
}

export default Pianists;
