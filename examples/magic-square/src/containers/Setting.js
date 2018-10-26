import { connect } from 'react-redux'
import { actions as settingActions } from '../reducers/setting'
import { actions as dataActions } from '../reducers/data'
import SettingComponent from '../components/Setting'

const mapStateToProps = state => {
  return {
    size: state.setting.size,
    start: state.setting.start,
    step: state.setting.step
  }
}

const mapDispatchToProps = dispatch => ({
  onSize: (value) => { dispatch(settingActions.setSize(value)) },
  onStart: (value) => { dispatch(settingActions.setStart(value)) },
  onStep: (value) => { dispatch(settingActions.setStep(value)) },
  onShuffle: () => { dispatch(dataActions.shuffle()) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingComponent)
