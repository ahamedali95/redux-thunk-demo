import React from 'react';
import { connect } from 'react-redux';
import {fetchPokemons} from '../actions/asyncActions';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchPokemons();
  }

  getPokemons() {
    return (
      <ul>
        {
          this.props.pokemons.map((pokemon, index) => {
            return (<li key={index}>{pokemon.name}</li>);
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <>
        <h1>WELCOME HOME</h1>
        {
          this.props.isLoading &&
          <p>Loading Pokemons....</p>
        }
        {this.getPokemons()}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    pokemons: state.pokemons
  };
};

export default connect(mapStateToProps, {fetchPokemons})(Home);

