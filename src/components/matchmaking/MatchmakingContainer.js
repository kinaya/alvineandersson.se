import { connect } from 'react-redux'
import Matchmaking from './Matchmaking'
import { matchMaking } from '../../actions'

function mapStateToProps(state) {
  return {
    matchitems: state.match.matchitems
  }
}

function mapDispatchToProps(dispatch) {
  return {
    matchMaking: (clickedItem, clickedAlternative, itemToShow, arrowAlignment) => dispatch(matchMaking(clickedItem, clickedAlternative, itemToShow, arrowAlignment))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Matchmaking)
