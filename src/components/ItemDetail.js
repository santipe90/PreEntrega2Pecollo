import React, { useEffect, useState } from 'react'
import './styled.css'
import { Paper } from '@mui/material'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({product}) => {
  const [quantityAdded, setQuantity] = useState(0)

  const handleOnAdd = (quantity) => {
    setQuantity(quantity)
  }
  return (
    <Paper> 
<div className='container'>
            <div key={product.id} className="item">
                <img src={product.img} alt={product.name} />
                <h3> {product.name}</h3>
                <p> {product.description} </p>
                <p> {product.stock} </p>
                <p> {product.price} </p>
                <p> {product.info} </p>
            
            <footer>
              {
                quantityAdded > 0 ? (
                  <Link to='/cart' className='Option'>Terminar Compra</Link>
                ) : (
               <ItemCount initial={1} stock={product.stock} onAdd={handleOnAdd}/>
                )
                
              }
    </footer> 
    </div>
</div>
        </Paper>
  )
}

export default ItemDetail