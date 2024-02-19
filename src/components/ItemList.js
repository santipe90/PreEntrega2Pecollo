import Item from '../components/Item.js'


const ItemList = ({items}) => {
    return(
        <div className='listItems'>
        {
            items.map((item)=>{
                
                return <Item key={item.id} item={item}/>
            
            })
        }
        </div>
    )
}

export default ItemList;