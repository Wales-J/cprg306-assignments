'use client'
import { useState } from 'react';
import  Item  from "./item";
import items from './items.json';

export default function ItemList() {
    const [sortBy, setSortBy] = useState('name');
    
    if(sortBy == 'name') {
        items.sort((a, b) => {
        if(a.name < b.name){
            return -1;
        }
        if(a.name > b.name){
            return 1;
        }
        return 0;});
    } else {
        items.sort((a, b) => {
        if(a.category < b.category){
            return -1;
        }
        if(a.category > b.category){
            return 1;
        }
        return 0;});
    };

    const itemList = items.map((item) => <li key={item.id}><Item name={item.name} quantity={item.quantity} category={item.category}/></li>);

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
