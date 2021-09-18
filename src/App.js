import React, { Component } from 'react';
import {CardList} from "./components/card-list/card-list.componet";
import './App.css';
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      searchField: ''
    }
  }

    componentDidMount() {
      fetch('https://thronesapi.com/api/v2/Characters')
          .then(response => response.json())
          .then(users => this.setState({characters: users}))
    }
    handleChange = (e) => this.setState({searchField: e.target.value})

  render() {
      const {characters, searchField} = this.state;
      const filterCharacters = characters.filter(ch => ch.fullName.toLowerCase().includes(searchField.toLowerCase()))
    return (
        <div className="App">
            <h1>Game of Thrones Characters</h1>
            <SearchBox
                placeholder='search'
                handleChange={this.handleChange}
            />
          <CardList characters={filterCharacters}/>

        </div>
    );
  }
}

export default App;
