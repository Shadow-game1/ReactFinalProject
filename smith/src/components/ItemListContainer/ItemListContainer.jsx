
import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { collection, getDocs, query, where } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import Loader from '../spinner/spinner'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/config'

export const ItemListContainer = ({Stock}) =>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState (true)

    const {editorialId} = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db,"productos")
        const q = editorialId
            ? query(productosRef, where("editorial","==",editorialId))
            : productosRef

        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return{
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setProductos(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [editorialId])

    return(
        <div className="list_container">
            <h2>Catalogo de productos</h2>
            <hr />
            <p>{Stock}</p>
            { loading
                ? <Loader />
                : <ItemList items={productos}/>
            }
            
        </div>
    )
}

