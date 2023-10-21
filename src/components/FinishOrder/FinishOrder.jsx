import React, { useContext, useState } from 'react'
import "./FinishOrder.css"
import { CartContext } from '../../context/Cartcontext'
import { Navigate } from 'react-router-dom'
import { db } from '../../firebase/config'
import { collection, addDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup';

const FormValidation = Yup.object().shape({
    nombre: Yup.string().required("Por favor completa tu nombre").min(3,"El nombre es demasiado corto").max(15,"El nombre es demasiado largo"),
    
    email: Yup.string().required("Por favor completa tu email").email("Este email no existe"),

    repetiremail: Yup.string().required("Por favor repite tu email").oneOf([Yup.ref("email"),null],"No se ha ingresado el mismo Email"),
    
    telefono: Yup.string().required("Por favor ingresa un numero de teléfono").min(7,"El numero ingresado es demasiado corto").max(12,"El numero ingresado no pertenece a una linea de teléfono"),

    direccion: Yup.string().required("Por favor completa con tu dirección").min(6,"La dirección ingresada es muy corta").max(20,"La dirección ingresada es muy larga")
})

const FinishOrder = () => {
    const { cart, totalCompra, emptyCart }= useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const generateOrder = async (values) => {

        const order = {
            client: values,
            items: cart.map(item => ({id: item.id, nombre: item.nombre, cantidad: item.cantidad})),
            total: totalCompra(),
            fyh: new Date()
        }
        
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, order)
        .then((doc) => {
            setOrderId(doc.id)
            emptyCart()
        })
    }

    if(orderId){
        return(
            <div className='container my-5 vol-ini'>
                <h2>¡Tu compra se ha realizado exitosamente!</h2>
                <hr />
                <p>Guardar tu numero de pedido: {orderId}</p> 

                <Link to="/">Volver al inicio</Link>
            </div>
        )
    }

    if(cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className='container my-5 formularioDeCompra'>
            <h2>Finalizar compra</h2>
            <hr />
            <Formik
            initialValues={{
                nombre:"",
                email:"",
                repetiremail:"",
                telefono:"",
                direccion:""
            }}
            
            validationSchema={FormValidation}
            onSubmit= {generateOrder}
            >
                {({values,handleChange, handleSubmit}) =>(
                    <div className='container my-5'>
                    <h3>Por favor complete los siguientes datos:</h3>
                    <div className='formulario-compra' >
                    <form onSubmit={handleSubmit}>
                    <input 
                        className='form-control my-4'
                        type="text" 
                        placeholder='Nombre'
                        value={values.nombre}
                        name='nombre'
                        onChange={handleChange}
                    />
                    <ErrorMessage name='nombre' component={"p"}/>
                    <input 
                        className='form-control my-4'
                        type="text" 
                        placeholder='Email'
                        value={values.email}
                        name='email'
                        onChange={handleChange}
                    />
                    <ErrorMessage name='email' component={"p"}/>
                    <input 
                        className='form-control my-4'
                        type="text" 
                        placeholder='Repite tu Email'
                        value={values.repetiremail}
                        name='repetiremail'
                        onChange={handleChange}
                    />
                    <ErrorMessage name='repetiremail' component={"p"}/>
                    <input 
                        className='form-control my-4'
                        type="number" 
                        placeholder='Teléfono'
                        value={values.telefono}
                        name='telefono'
                        onChange={handleChange}
                    />
                    <ErrorMessage name='telefono' component={"p"}/>
                    <input 
                        className='form-control my-4'
                        type="text" 
                        placeholder='Dirección'
                        value={values.direccion}
                        name='direccion'
                        onChange={handleChange}
                    />
                    <ErrorMessage name='direccion' component={"p"}/>
                    <div className='buttonForm'>
                        <button className='btn btn-primary' type='submit'>Enviar</button>
                    </div>
                    </form>
                    </div>
                </div>)}
            </Formik>
        </div>
    )
}

export default FinishOrder