import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  renderPets = pets => {
    pets.map(pet => <Pet />);
  };

  render() {
    return <div className="ui cards">{this.renderPets(this.props.pets)}</div>;
  }
}

export default PetBrowser;
