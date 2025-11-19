import { ItemCounter } from "./shopping-cart/ItemCounter";


interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    {productName: "Nintendo Switch 2", quantity: 1},
    {productName: "Play 2", quantity: 2},
    {productName: "XBOX 360", quantity: 3},
]


export function FirstStepsApp () {
    return(
        <>
            <h1>Carrito de compras</h1>

            {
                itemsInCart.map(({productName, quantity}) => (
                    <ItemCounter key={productName} name={productName} quantity = {quantity}/>
                ))
            }

            {/* <ItemCounter name="Nintendo Switch 2" quantity = {2}  />
            <ItemCounter name="Play 2" quantity = {5}/>
            <ItemCounter name="XBOX 360" quantity = {3}/> */}

        </>
    )
} 