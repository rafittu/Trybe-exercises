// import pokemons from "./data";
// import Pokemon from "./Pokemon";

// function Pokedex() {
//   return (
//     <div className="pokedex">
//       {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
//     </div>
//   );
// }


import React from 'react';
import Pokemon from "./Pokemon";

// class Pokedex extends React.Component {
//   render() {

//     return (
//       <div className="pokedex">
//         {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
//       </div>
//     );
//   }
// }


class Pokedex extends React.Component {
  render() {

    const firePokemons = this.props.pokemons.filter((pokemon) => pokemon.type.includes('Fire'));
    const psychicPokemons = this.props.pokemons.filter((pokemon) => pokemon.type.includes('Psychic'));

    return (
      <div className="pokedex">
        {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    );
  }
}


export default Pokedex;