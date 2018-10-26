import { connect } from 'react-redux'
import MagicSquareComponent from '../components/MagicSquare'

const mapStateToProps = state => {
  return {
    data: state.data.data,
    size: state.setting.size
  }
}

export default connect(
  mapStateToProps,
  null
)(MagicSquareComponent)
