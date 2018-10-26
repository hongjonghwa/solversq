import { connect } from 'react-redux'
import SumCellComponent from '../components/SumCell'
import { getCorrectSum } from '../reducers/setting'

const mapStateToProps = (state, { value }) => {
  return {
    correct: getCorrectSum(state) === value
  }
}

export default connect(
  mapStateToProps,
  null
)(SumCellComponent)
