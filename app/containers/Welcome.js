import React from 'react'
import { connect } from 'react-redux'
import { getHeroes } from '../actions'

class Welcome extends React.Component {
  componentDidMount() {
    this.props.getHeroes();
  }
  render() {
    return (
      <div>
        Welcome!
        <ul>
        {
          this.props.heroes.map(hero => {
            return (
              <li key={hero.id}>{hero.name}</li>
            );
          })
        }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    heroes: state.heroes
  }
}

export default connect(mapStateToProps, { getHeroes })(Welcome)
