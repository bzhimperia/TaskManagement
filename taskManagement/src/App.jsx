import './App.css'
import AddItem from "./component/AddItem/index.jsx";
import ItemList from "./component/TaskList/index.jsx";
import AddCategory from "./component/AddCategory/index.jsx";
import useShopReducer from "./reducer/useListReducer.jsx";
function App() {


    const handleReverse = () => {
        dispatch({
            type: 'reverse_items'
        })
    }

  return (
    <>
      <AddCategory />
      <br />
      <br />
      <AddItem />
      
        <button onClick={handleReverse}>Inverser la liste</button>
      <ItemList />
    </>
  )
}

export default App