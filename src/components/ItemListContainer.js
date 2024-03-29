import './styled.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductById } from '../serverMock/productMock';
import ItemList from '../components/ItemList'

function ItemListContainer ({ greeting }) {
    const [items, setItems] = useState ([]);

    const { categoryId } = useParams()

    useEffect (() => {

        const asyncFunc = categoryId ? getProductById : getProducts

         asyncFunc (categoryId)
         .then(response => {
            setItems(response)
         })
         .catch(error => {
            console.error(error)
         })
            
        }, [categoryId])

return (
    <div className='container'>
    <h1 className='title'>{greeting}</h1>
        <ItemList id={1} items={items}/>
    </div>
    ); 
}

export default ItemListContainer;