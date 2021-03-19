import { Component } from 'react';
import GroceryList from './components/grocery/GroceryList';
import GroceryForm from './components/grocery/GroceryForm';
class App extends Component {
  state = {
    groceries: [
      { id: 1, item: "Apple", price: "2"},
      { id: 2, item: "Cherry", price: "3"},
      { id: 3, item: "Banana", price: "1"},

    ]
  }

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addGrocery = (incomingGrocery) => {
    const { groceries } = this.state
    let newGrocery = { id: this.getId(), ...incomingGrocery }
    this.setState({ groceries: [...groceries, newGrocery]})
  }

  removeGrocery = (id) => {
    const groceries = this.state.groceries.filter( g => {
      if (g.id !== id) {
        return g
      }
    })
    this.setState({ groceries: [...groceries] })
  }

  updateGrocery = (incomingGrocery) => {
    const {groceries} = this.state
    const {id} = incomingGrocery
    this.setState({
      groceries: groceries.map( g => {
        if (g.id === id ) {
          return {...incomingGrocery}
        }
        return g
      })
    })
  }

  updateComplete = (id) => {
    const { groceries } = this.state
    this.setState({
      groceries: groceries.map( g => {
        if (g.id === id) {
          return {
            ...g, 
            complete: !g.complete
          }
        }
        return g
      })
    })
  }

  render() {
    const { groceries } = this.state
    
    return (
      <>
      <h1>Grocery Store</h1>
      <GroceryForm addGrocery={this.addGrocery}/>
      <GroceryList 
       groceries={groceries}
       removeGrocery={this.removeGrocery}
       updateGrocery={this.updateGrocery} 
       updateComplete={this.updateComplete}
      />
      </>

    )
  }
}

export default App;