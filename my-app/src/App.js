import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';


class App extends Component {
  state = {
    ninjas: [
      {name: 'Vlada', age: 38, belt: 'black', id: 1},
      {name: 'Masa', age: 8, belt: 'pink', id: 2},
      {name: 'Iva', age: 6, belt: 'green', id: 3}

    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return(
      <div className="App">
        <Ninjas ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>

      </div>
    )
  }
}


export default App;