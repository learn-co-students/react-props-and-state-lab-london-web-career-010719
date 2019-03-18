import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            
            {this.props.pet.name}
          </a>
          <p>{this.props.pet.gender === "female" ? '♀' : '♂'}</p>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>{this.props.pet.age}</p>
            <p>{this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted === true ?
          <button className="ui disabled button">Already adopted</button>
          :
          <button className="ui primary button" value={this.props.pet} onClick={() => this.props.onAdoptPet(this.props.pet)}>Adopt pet</button>} 
        </div>
      </div>
    )
  }
}

export default Pet
