import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const styles = {
  default: { border: '5px solid #aaaaaa', height: '50px', padding: '8px 0 0 0' },
  selected: { border: '5px solid #ff0000', color: '#ff0000', height: '50px', padding: '8px 0 0 0' }
}

const CellComponent = ({ value, selected, onSet, onReset }) => {
  return (
    <div style={selected === value ? styles.selected : styles.default}>
      <Button variant="contained" size="large" color={selected === value ? 'secondary' : 'default'} onClick={ value === selected ? onReset() : onSet(value) }>
        {value}
      </Button>
    </div>
  )
}

CellComponent.propTypes = {
  value: PropTypes.number.isRequired,
  selected: PropTypes.number,
  onSet: PropTypes.func,
  onReset: PropTypes.func
}

CellComponent.defaultProps = {
  selected: -1,
  onSet: f => f,
  onReset: f => f
}

export default CellComponent
