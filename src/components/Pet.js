import React from "react";

class Pet extends React.Component {
  handleClick = pet => {
    pet.isAdopted = true;
    this.props.onAdoptPet(pet);
  };

  render() {
    const { name, age, weight, gender, type, id } = this.props.pet;

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === "female" ? "♀" : "♂"}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age} </p>
            <p>Weight: {weight}kg</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              onClick={() => this.handleClick(this.props.pet)}
              className="ui primary button"
            >
              Adopt pet
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Pet;
