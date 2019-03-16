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
    fetch(URL)
      .then(resp => resp.json())
      .then(petsFromApi => this.setState({ pets: petsFromApi }));
  };

  updateFilterInState = filter => {
    this.setState({ filters: { type: filter } });
  };

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
              <PetBrowser pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
