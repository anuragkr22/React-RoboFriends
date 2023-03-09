import CardList from "./components/CardList";
import SearchBox from './components/SearchBox'
import Scroll from './components/Scroll'
import 'tachyons'
import { Component } from "react";
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: '',
      loading: false
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url).then(res => res.json())
              .then(users => this.setState({robots: users, loading: false}))
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value
    })
  }

  render() {
    const {robots, searchField, loading} = this.state

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="tc">
        <h1 className="f1">ROBOFRINEDS</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        {loading?<h1>{'Loading...'}</h1>:null}
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
    );
  }
  
}

export default App;
