import { useState } from 'react' 
import '../components/styled.css'
import  Button  from '../commons/Button'

const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(0, 0, 4)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className ='counter'>
        <button className='button-34' onClick={decrement}>-</button>
        <h4 className='Number'>{quantity}</h4>
        <button className='button-34' onClick={increment}>+</button>
        <div>
          
            <Button className='button-34'onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al Carrito</Button>
        </div>
        </div>
    )
}

export default ItemCount