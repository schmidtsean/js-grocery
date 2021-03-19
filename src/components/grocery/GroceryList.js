import Grocery from './Grocery';
const GroceryList = ({ groceries, removeGrocery, updateGrocery, complete }) => {
  console.log(groceries)
  return (
    <>
      {
        groceries.map( g => (
          <Grocery key={g.id}
            {...g}
            removeGrocery={removeGrocery}
            updateGrocery={updateGrocery}
          />
        ))
      }
    </>
  )
}
export default GroceryList;