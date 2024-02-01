import { Paper, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount';

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
                {/* <ItemCount stock={stock} initial={0}></ItemCount> */}
                    <Link 
                        to={`/category/${id}`}>
                            Ver Detalle 
                    </Link>
            </div>           
            
        </Paper>
    );
}

export default Item;


           