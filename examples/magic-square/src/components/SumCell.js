import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  default: { },
  correct: { border: '5px solid #fcc' }
}

const SumCell = ({ value, correct }) => {
  return (
    <div style={correct ? styles.correct : styles.default}>
      <h3>{value}</h3>
    </div>
  )
}
SumCell.propTypes = {
  value: PropTypes.number.isRequired,
  correct: PropTypes.bool
}

export default SumCell
