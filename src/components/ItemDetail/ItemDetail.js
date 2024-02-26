import React, { useEffect, useState } from 'react'
import '../ItemDetail/ItemDetail.css'
import { Paper } from '@mui/material'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
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
            </div> 
    <ItemCount initial={1} stock={product.stock} onAdd={handleOnAdd}/>
</div>
        </Paper>
  )
}

export default ItemDetail

