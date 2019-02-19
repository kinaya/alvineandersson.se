import { connect } from 'react-redux'
import Matchmaking from './Matchmaking'
import { matchMaking, resetGame } from '../../actions'

function mapStateToProps(state) {
  return {
    matchitems: state.match.matchitems
  }
}

// They dont use this they just import matchMaking in connect()...?
function mapDispatchToProps(dispatch) {
  return {
    matchMaking: (clickedItem, clickedAlternative, itemToShow) => dispatch(matchMaking(clickedItem, clickedAlternative, itemToShow)),
    resetGame: () => dispatch(resetGame())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Matchmaking)
