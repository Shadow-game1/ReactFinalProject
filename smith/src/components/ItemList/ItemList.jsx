import ItemCard from "../ItemCard/ItemCard"

const ItemList = ( {items} ) =>{
    return(
        <div className="catalogo-index">
            {
                items.map((prod) => <ItemCard item={prod} key={prod.id} />)
            }
        </div>
    )
}

export default ItemList