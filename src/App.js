import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const IntialuserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {userInput: ' ', usersDetailsList: IntialuserDetailsList}

  onSearchChangeInput = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  render() {
    const {userInput, usersDetailsList} = this.state

    const searchResults = usersDetailsList.filter(eachArray =>
      eachArray.name.includes(userInput),
    )

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          onChange={this.onSearchChangeInput}
          value={userInput}
        />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile userDetails={eachUser} key={eachUser.uniqueNo} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
