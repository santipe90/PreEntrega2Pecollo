import './styled.css'
import { useEffect, useState } from 'react';
import { getProducts } from '../serverMock/productMock';
import Carousel from 'react-material-ui-carousel'
import ItemList from '../components/ItemList'

function ItemListContainer ({ greeting }) {
    const [items, setItems] = useState ([]);

    useEffect (() => {
        /*getProducts()
        .then((res) => console.log(res))
        .catch((err) => console.log(err.message));*/
        const fetchProducts = async () => {
            try {
                const res = await getProducts();
                setItems(res);
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchProducts();
    }, []);

return (
    <div className='container'>
    <h1 className='title'>{greeting}</h1>
        <ItemList items={items}/>
    </div>
    );
}

export default ItemListContainer;