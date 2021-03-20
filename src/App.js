import { Component } from 'react';
import GroceryList from './components/grocery/GroceryList';
import GroceryForm from './components/grocery/GroceryForm';
import Footer from './components/grocery/Footer';
import './App.css'
class App extends Component {
  state = {
    groceries: [
      { id: 1, item: "Apple", price: "2", complete: false},
      { id: 2, item: "Cherry", price: "3", complete: false},
      { id: 3, item: "Banana", price: "1", complete: false},

    ],
    filter: 'All'
  }
  setFilter = (filter) => this.setState({ filter })
  getId = () => {
   
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addGrocery = (incomingGrocery) => {
    const { groceries } = this.state
    const { title, complete } = incomingGrocery
    let newGrocery = { id: this.getId(), title, complete, ...incomingGrocery }
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
    const {id, complete} = incomingGrocery
    
    this.setState({ 
      groceries: 
      groceries.map( g => {
        if (g.id === id ) {
          return {...incomingGrocery}
        }
        return g
      })
    })
  }
  visibleItems = () => {
    const { groceries, filter } = this.state 
    switch(filter) {
      case 'Active':
        return groceries.filter( g => !g.complete)
      case 'Completed':
        return groceries.filter( g => g.complete)
      default:
        return groceries
    }
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
    const { groceries, filter } = this.state
    
    return (
      <>
      <h1>Grocery Store</h1>
      <a style={{color: 'white'}} href='home.js'>Home</a>
      <Footer filter={filter} setFilter={this.setFilter} />
      <GroceryForm addGrocery={this.addGrocery}/>
      <GroceryList 
       groceries={this.visibleItems()}
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