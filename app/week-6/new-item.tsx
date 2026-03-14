"use client"
import {useState} from 'react';
import Item from './item';

export default function NewItem({onAddItem}) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        var item1 = {name, quantity, category};
        console.log(item1);

        //alert(`Name: ${item1.name}\nQuantity: ${item1.quantity}\nCategory: ${item1.category}`);
        onAddItem(item1);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col bg-purple-400 text-black">
                <div className="m-3">
                    <label>Name: </label><input type="text" value={name} onChange={(e) => {setName(e.target.value)}} className="bg-purple-300 rounded-lg"></input>
                </div>
                <div className="m-3">
                    <label>Quantity: </label><input type="number" min={1} max={99} value={quantity} onChange={(e) => {setQuantity(e.target.valueAsNumber)}} className="bg-purple-300 rounded-lg"></input>
                </div>
                <div className="m-3">
                    <label>Category: </label><select value={category} onChange={(e) => {setCategory(e.target.value)}} className="bg-purple-300 rounded-lg">
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozenFoods">Frozen Foods</option>
                        <option value="cannedGoods">Canned Goods</option>
                        <option value="dryGoods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                
                <button type='submit' className="bg-purple-300 rounded-lg w-20 self-center mb-3">Submit</button>
            </form>
        </div>
    )
}