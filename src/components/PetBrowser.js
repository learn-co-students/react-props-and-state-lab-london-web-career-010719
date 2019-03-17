import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  petCard = () =>
    this.props.pets.map(pet => (
      <Pet
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={pet.isAdopted}
        key={pet.id}
        pet={pet}
      />
    ));

  render() {
    return <div className="ui cards">{this.petCard()}</div>;
  }
}

export default PetBrowser;

// const petCards = this.props.pets.map(pet => (
//   <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
// ));

// return <div className="ui cards">{petCards}</div>;
