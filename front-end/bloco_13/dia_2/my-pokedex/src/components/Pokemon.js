import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {

    return (
      <div className="pokemon">
        <p>Name: {this.props.pokemon.name}</p>
        <p>Type: {this.props.pokemon.type}</p>
        <p>Average Weight: {this.props.pokemon.averageWeight.value} {this.props.pokemon.averageWeight.measurementUnit}</p>
        <img src={this.props.pokemon.image} alt="Imagem do pokemon" />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
