import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

const URL = "/api/pets";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  getPets = () => {
    const { type } = this.state.filters;

    if (type === "all") {
      fetch(URL)
        .then(resp => resp.json())
        .then(petsFromApi => this.setState({ pets: petsFromApi }));
    } else {
      fetch(`${URL}?type=${type}`)
        .then(resp => resp.json())
        .then(petsFromApi => this.setState({ pets: petsFromApi }));
    }
  };

  updateFilterInState = filter => {
    this.setState({ filters: { type: filter } });
  };

  updateAdopted = petId => {
    const pets = this.state.pets.map(petObj => {
      return petObj.id === petId ? { ...petObj, isAdopted: true } : petObj;
    });
    this.setState({ pets });
  };

  // onAdoptPet = petId => {
  //   const pets = this.state.pets.map(p => {
  //     return p.id === petId ? { ...p, isAdopted: true } : p;
  //   });
  //   this.setState({ pets });
  // };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.updateFilterInState}
                onFindPetsClick={this.getPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                onAdoptPet={this.updateAdopted}
                pets={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
