import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  } 

  handleChange = (event) => {
    const newType = event.target.value    
    this.setState({
        filters: {
          ...this.state.filters,
          type: newType
        }
      })
  }


  handleFindPetsClick = () => {
    let url = '/api/pets'
    this.state.filters.type !== 'all' ? url = `/api/pets?type=${this.state.filters.type}` : url
    return fetch(url)
    .then(res => res.json()) 
    .then(pets => this.resetStatePets(pets))
  }

  resetStatePets = (newPets) => {
    this.setState({
      pets: newPets
    })
    // console.log(this.state.pets)
  }
 
  onAdoptPet = (id) => {
    const selectedPet = this.state.pets.map(pet => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet;
    });
    this.setState({pets: selectedPet})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChange} onFindPetsClick={this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
