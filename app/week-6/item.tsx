export type ItemProp={
    name:string
    quantity:number
    category:string
}
export default function Item({name, quantity, category}:ItemProp) {
    return (
        <div className="m-10 text-black font-serif">
            <ol className="bg-purple-400 rounded-lg">
                <li className="pl-3 pt-3">Name: {name}</li>
                <li className="pl-3">Quantity: {quantity}</li>
                <li className="pl-3 pb-3">Category: {category}</li>
            </ol>
        </div>
    )
}