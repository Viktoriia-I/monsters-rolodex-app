import React, { Component } from "react";
import "./App.css";
import { MonstersCardsList } from "./components/MonstersCardsList/MonstersCardsList";
import { SearchBox } from "./components/SearchBox/SearchBox";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: "",
    };

    /* Instead of this binding method
            this.handleChange = this.handleChange.bind(this); 
      we can use arrow functions as below */
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    /* is equivalent to 
      const monsters = this.state.monsters
      const searchField = this.state.searchField
    */
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.handleChange}
        />
        <MonstersCardsList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
