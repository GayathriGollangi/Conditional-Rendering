import {Component} from 'react'
import './App.css'
import Welcome from './components/Welcome'

class App extends Component {
  state = {isLoggedIn: false}

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>}
      </div>
    )
  }
}
export default App
