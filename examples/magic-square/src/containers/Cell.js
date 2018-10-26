import { connect } from 'react-redux'
import CellComponent from '../components/Cell'
import { actions as dataActions } from '../reducers/data'

const mapStateToProps = state => {
  return {
    selected: state.data.selected
  }
}

const mapDispatchToProps = dispatch => ({
  onSet: (value) => () => { dispatch(dataActions.selectorSet(value)) },
  onReset: () => () => { dispatch(dataActions.selectorReset()) }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CellComponent)
