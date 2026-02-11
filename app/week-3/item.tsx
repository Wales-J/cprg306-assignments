type ItemProp={
    name:string
    quantity:number
    category:string
}
export default function Item({name, quantity, category}:ItemProp) {
    return (
        <div class="m-10 text-black font-serif">
            <ol class="bg-purple-400 rounded-lg">
                <li class="pl-3 pt-3">Name: {name}</li>
                <li class="pl-3">Quantity: {quantity}</li>
                <li class="pl-3 pb-3">Category: {category}</li>
            </ol>
        </div>
    )
}