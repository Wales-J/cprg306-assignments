'use client'
import { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items];
    
    if(sortBy == 'name') {
        sortedItems.sort((a, b) => {
        if(a.name < b.name){
            return -1;
        }
        if(a.name > b.name){
            return 1;
        }
        return 0;});
    } else {
        sortedItems.sort((a, b) => {
        if(a.category < b.category){
            return -1;
        }
        if(a.category > b.category){
            return 1;
        }
        return 0;});
    };

    const itemList = sortedItems.map((item) => <li key={item.id}><Item name={item.name} quantity={item.quantity} category={item.category}/></li>);

    return (
        <div>
            <ul>
                {itemList}
            </ul>
            <div>
                <button onClick={(e)=>{e.preventDefault(); setSortBy('name')}} className='text-black bg-purple-400 rounded-lg m-10 p-5'>Sort by name</button>

                <button onClick={(e)=>{e.preventDefault(); setSortBy('category')}} className='text-black bg-purple-400 rounded-lg p-5'>Sort by category</button>
            </div>
            
        </div>

    );
};
