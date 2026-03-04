'use client'
import { useState } from 'react';
import ItemList from "./item-list.tsx";
import NewItem from "./new-item.tsx"
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (e) => {
        e.preventDefault();

    };

  return (
    <main className="bg-purple-200">
      <h1 className="text-xl ml-5 mt-5 text-black">Shopping List</h1>
      <ItemList />
      <NewItem />
    </main>
  );
}

