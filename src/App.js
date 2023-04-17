import {Component} from 'react'
import './App.css'
import Welcome from './components/Welcome'

class App extends Component {
  state = {isLoggedIn: false}

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <Welcome greeting="hi" />
      </div>
    )
  }
}
export default App
