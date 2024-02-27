import './styled.css'
import React, { useEffect } from 'react';
import { Paper } from '@mui/material';
import  Button  from '../commons/Button'
import { Link } from 'react-router-dom'



const Item = ({item}) => {
    const {id, name, description, stock, price, img} = item;

    return (
        <Paper> 
            <div key={id} className="item">
                <img src={img} alt={name} />
                <h3> {name}</h3>
                <p> {description} </p>
                <p> {stock} </p>
                <p> {price} </p>
                     
            <Link 
            to={`/item/${id}`}> 
            <Button className="button-34"> Ver Detalle</Button>     
            </Link>
                    
                  
            </div>           
            
        </Paper>
    );
}

export default Item;


           