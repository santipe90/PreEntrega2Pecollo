import React from 'react'
import './styled.css'
import { Paper } from '@mui/material'

const ItemDetail = ({product}) => {

  return (
    <Paper> 
<div className='container'>
            <div key={product.id} className="item-detail">
                <img src={product.img} alt={product.name} />
                <h3> {product.name}</h3>
                <p> {product.description} </p>
                <p> {product.stock} </p>
                <p> {product.price} </p>
                <p> {product.info} </p>
            </div>           
            </div>
        </Paper>
  )
}

export default ItemDetail