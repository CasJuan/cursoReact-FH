import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp () {
    return(
        <>
            <h1>Carrito de compras</h1>
            <ItemCounter name="Nintendo Switch 2" quantity = {2}  />
            <ItemCounter name="Play 2" quantity = {5}/>
            <ItemCounter name="XBOX 360" quantity = {3}/>
        </>
    )
} 