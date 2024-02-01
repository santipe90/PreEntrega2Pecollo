/*import './ItemDetailContainer.css'*/
import {useState, useEffect} from 'react' 
import { getProductById  } from '../serverMock/productMock'
import ItemDetail from '../components/ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ([])
    const { id } = useParams();
    useEffect (() => {
        getProductById(id)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    },[id])

    return(
        <div className='container'> 
            <ItemDetail product={product} />
        </div> 
    )
}

export default ItemDetailContainer