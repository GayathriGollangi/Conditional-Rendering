import {Component} from 'react'
import './App.css'
import Welcome from './components/Welcome'

class App extends Component {
  state = {isLoggedIn: false}

  render() {
    const {isLoggedIn} = this.state
    let authButton
    if (isLoggedIn === true) {
      authButton = <button>Logout</button>
    } else {
      authButton = <button>Login</button>
    }

    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {authButton}
      </div>
    )
  }
}
export default App
