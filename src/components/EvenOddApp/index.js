// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  increment = () => {
    this.setState(prevState => {
      const value = Math.floor(Math.random() * 100)
      return {number: prevState.number + value}
    })
  }

  render() {
    const {number} = this.state

    return (
      <div className="container">
        <h1>Count {number}</h1>
        <p>Count is {number % 2 === 0 ? 'Even' : 'Odd'}</p>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
        <p className="note">*Increase by Random Number between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
