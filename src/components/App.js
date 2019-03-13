import React from 'react'
import {getAll} from '../data/pets'
import Filters from './Filters'
import PetBrowser from './PetBrowser'
import fetchMock from '../fetch-setup'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [...getAll()],
      selectedPetId: 'undefined',
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (newType) => {
    this.setState({
      filters: {
        type: newType
      }
    })
  }

  onFindPetsClick = () => {
    const type = this.state.filters.type
    let url = `/api/pets`
    if (type !== 'all'){
      url = url + `?type=${type}`
    }

    fetch(url).then(resp => resp.json()).then(pets => this.setState({
      pets: pets
    }))
  }

  // onAdoptPet = (id) => {
  //   let newPets = [...this.state.pets]
  //   let editPet = newPets.filter(pet => pet.id === id)
  //   let otherPets = newPets.filter(pet => pet.id !== id)
  //   editPet[0].isAdopted = !editPet[0].isAdopted
  //   const newPetArray = otherPets.push(editPet[0])
  //   this.setState({
  //     pets: newPetArray
  //   })
  // }

  onAdoptPet = (id) => {
    this.setState({
      pets: this.state.pets.map(pet => {
        if (pet.id !== id) return pet;
        pet.isAdopted = !pet.isAdopted
        return pet;
      })
    })
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
              <Filters onChangeType = {this.onChangeType} onFindPetsClick = {this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets = {this.state.pets} onAdoptPet = {this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
