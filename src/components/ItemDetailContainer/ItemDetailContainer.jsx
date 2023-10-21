import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import BasicExample from '../spinner/spinner'
import { ItemDetailCard } from '../ItemDetailCard/ItemDetailCard'
import "./ItemDetailContainer.css"
import { db } from '../../firebase/config'

export const ItemDetailContainer = ({Stock}) => {
    const [item, setItem] = useState(null)

    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()
    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "productos", itemId)
        getDoc(docRef)
        .then((doc) => {
            const iteM = {
                id: doc.id,
                ...doc.data()
            }
            setItem(iteM)
        })
        .catch(e => console.log(e))
        .finally(() => setLoading(false))
    }, [])

    return(
        <div className="producto-detalle">
            <h2>Catalogo de productos</h2>
            <hr />
            <p>{Stock}</p>
            { loading
                ? <BasicExample />
                : <ItemDetailCard item={item}/>
            }
            
        </div>
    )
}
