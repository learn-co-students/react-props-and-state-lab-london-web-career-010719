import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'
const url = `/api/pets`

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [""],
      filters: {
        type: 'all'
      }
    }
  }

  onFindPetsClick = () => {
    fetch(this.state.filters.type === "all" ? `${url}` : `${url}?type=${this.state.filters.type}`)
    .then(resp => resp.json())
  
    .then(resp => this.setState({
      pets: resp
    }))
  }

  onChangeType = (newType) => {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
      type: newType.target.value
    })
  })
}

  onAdoptPet = (pet) => {
    let newArray = this.state.pets.filter(p => p.id !== pet.id)
    pet.isAdopted = true
    this.setState({
      pets: [...newArray, pet]
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={() => this.onFindPetsClick()}/>
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
