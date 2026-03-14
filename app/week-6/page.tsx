'use client'
import { useState } from 'react';
import ItemList from "./item-list";
import  NewItem  from "./new-item"
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const generateNewId = () => {
    var newId = crypto.randomUUID();
    items.forEach(i => {
      if (i.id == newId) {
        newId = generateNewId();
      }
    })
    return newId;
  }

  const handleAddItem = (item: { name: any; quantity: any; category: any; }) => {
    var newItem = {
      id: generateNewId(),
      name: item.name,
      quantity: item.quantity,
      category: item.category

    }
        setItems([...items, newItem])
    };

  return (
    <main className="bg-purple-200">
      <h1 className="text-xl ml-5 mt-5 text-black">Shopping List</h1>
      <ItemList items={items}/>
      <NewItem onAddItem={handleAddItem} />
    </main>
  );
}

