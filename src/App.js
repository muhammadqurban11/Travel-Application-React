import { useState } from 'react';
import Logo from './Components/Logo';
import Packing from './Components/Packing';
import Stats from './Components/Stats';
import Form from './Components/Form';


export default function App() {
  const [items, setItems] = useState([]);


  function handleAddItems(item) {
    setItems(items => [...items, item])
  }




  function handleDeleteItem(id) {
    console.log(id)
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  function clearListItem() {
    const confirmed = window.confirm("Are you sure you want to delete all items! ")
    if (confirmed) setItems([])
  }



  return (
    <div className="app">
      {/* <Home /> */}
      <Logo />
      <Form onAddItems={handleAddItems} />
      <Packing items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} deleteItemList={clearListItem} />
      <Stats items={items} />
    </div>
  )
}



export function Item({ item, onDeleteItem, onToggleItem, }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "Line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)} >❌</button>
    </li>
  )
}

