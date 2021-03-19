import { Component } from 'react';
import GroceryForm from './GroceryForm';
class Grocery extends Component {
    state = { editing: false }
    toggleEdit = () => {
        const { editing } = this.state 
        this.setState({ editing: !editing })
    }
    render() {
        const { editing } = this.state
        const { item, price, id, removeGrocery, updateGrocery} = this.props
        return(
            <div>
                <h1>{item}</h1>
                <h3>{price}</h3>
                <button onClick={() => removeGrocery(id)}>
                    Delete Item
                </button>
                {
                    editing ?
                    <GroceryForm {...this.props} toggleEdit={this.toggleEdit} />
                    :
                    <button onClick={() => this.toggleEdit()}>Edit</button>
                }
            </div>
        )
    }
}
export default Grocery;  