import React from 'react'
import PropTypes from 'prop-types'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Cell from '../containers/Cell'
import SumCell from '../containers/SumCell'
import Setting from '../containers/Setting'

function sumCell (value, key) {
  return <GridListTile key={key}><SumCell value={value}/></GridListTile>
}

function cell (value, key) {
  return <GridListTile key={key}><Cell value={value}/></GridListTile>
}

function calc (data, count, start, step) {
  let ret = 0
  let idx = start
  for (let i = 0; i < count; ++i) {
    ret += data[idx]
    idx += step
  }
  return ret
}

function makeCell (data, size) {
  let ret = []
  let seq = 0
  ret.push(sumCell(calc(data, size, size - 1, size - 1), ++seq)) // 우상 대각선
  for (let i = 0; i < size; ++i) {
    for (let j = 0; j < size; ++j) {
      ret.push(cell(data[i * size + j], ++seq))
    }
    ret.push(sumCell(calc(data, size, i * size, 1), ++seq)) // 가로
  }
  for (let j = 0; j < size; ++j) {
    ret.push(sumCell(calc(data, size, j, size), ++seq)) // 세로
  }
  ret.push(sumCell(calc(data, size, 0, size + 1), ++seq)) // 우하 대각선
  return ret
}

function MagicSquareComponent (props) {
  const { data, size } = props

  return (
    <GridList cellHeight={70} cols={size + 1}>
      <GridListTile key="Subheader" cols={size} style={{ height: 'auto' }}>
        <Setting/>
      </GridListTile>
      { makeCell(data, size) }
    </GridList>
  )
}
MagicSquareComponent.propTypes = {
  data: PropTypes.array.isRequired,
  size: PropTypes.number.isRequired
}

export default MagicSquareComponent
