type ItemProp={
    name:string
    quantity:number
    category:string
}
export default function Item({name, quantity, category}:ItemProp) {
    return (
        <div>
            <ol>
                <li>Name: {name}</li>
                <li>Quantity: {quantity}</li>
                <li>Category: {category}</li>
            </ol>
        </div>
    )
}