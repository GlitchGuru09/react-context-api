import react from 'react'
import {useCart} from "../context/Cart.jsx"

import item from './Item';

const Cart = () => {
    const cart = useCart();

    const total = cart.items.reduce((a, b) => a + b.price, 0);
    return (
        <div className='cart'>
            <h1>Cart</h1>
            {
                cart && cart.items.map((item) => (
                    <li>
                        {item.name} - {item.price}
                    </li>
                ))
            }


            <h5>total bill: ${total}</h5>
        </div>
    )
}

export default Cart;