import { useState } from "react";
import { Item } from "../App";

// import { useState } from "react";
// import { Item } from "./App";

export default function Packing({ items, onDeleteItem, onToggleItem, deleteItemList }) {
    const [sortBy, setSortBy] = useState('input');

    let sortedItems;
    if (sortBy === 'input') sortedItems = items;
    if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    return (
        <div className="list">
            <ul>
                {sortedItems.map(item => <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />)}
            </ul>
            <div className='actions'>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort By Input </option>
                    <option value="description">Sort By Description </option>
                    <option value="packed">Sort By Packed</option>
                </select>
                <button onClick={deleteItemList}>Clear List</button>
            </div>
        </div>
    );
}
