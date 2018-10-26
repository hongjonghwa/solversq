import React from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl/FormControl'
import InputLabel from '@material-ui/core/InputLabel/InputLabel'
import Select from '@material-ui/core/Select/Select'
import MenuItem from '@material-ui/core/MenuItem/MenuItem'

const items = (min, max) => {
  let ret = []
  for (let i = min; i <= max; ++i) ret.push(<MenuItem key={i} value={i}>{i}</MenuItem>)
  return ret
}

const NumberSelector = ({ min, max, value, name, setter }) => {
  return (
    <FormControl style={{ minWidth: 120 }}>
      <InputLabel htmlFor={name}>{name}</InputLabel>
      <Select
        value={value}
        onChange={e => { setter(e.target.value) }}
        inputProps={{
          name: name,
          id: name
        }}
      >
        {items(min, max)}
      </Select>
    </FormControl>
  )
}
NumberSelector.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  setter: PropTypes.func.isRequired
}

export default NumberSelector
