import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import MagicSquare from './containers/MagicSquare'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Magic Square - 홍지후 마방진</h1>
            </header>
            <div className="App-intro">
              <MagicSquare/>
            </div>
          </div>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App
