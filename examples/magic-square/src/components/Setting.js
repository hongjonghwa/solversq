import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import NumberSelector from './NumberSelector'

class Setting extends React.Component {
  render () {
    const { size, start, step, onSize, onStart, onStep, onShuffle } = this.props

    return (
      <form autoComplete="off" style={{ padding: '10px' }}>
        <NumberSelector min={3} max={7} value={size} name="Size" setter={v => onSize(v)} key="name" />
        <NumberSelector min={1} max={100} value={start} name="Start" setter={v => onStart(v)} key="start" />
        <NumberSelector min={1} max={10} value={step} name="Step" setter={v => onStep(v)} />
        <Button color="primary" variant="outlined" onClick={onShuffle}>Shuffle(셔플)</Button>
      </form>
    )
  }
}

Setting.propTypes = {
  size: PropTypes.number.isRequired,
  start: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onSize: PropTypes.func.isRequired,
  onStart: PropTypes.func.isRequired,
  onStep: PropTypes.func.isRequired,
  onShuffle: PropTypes.func.isRequired
}

export default Setting
