import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'

const EditProducts = () => {
    let { productId } = useParams();
    const [product, setProduct] = useState({})

    console.log(productId)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(product => {
            console.log(product)
            setProduct(product)
        })
    }, [])

    return <section>
        <h1>{product.name}</h1>
        <p>Name: {product.name}</p>
        <p>Price: {product.price} &euro;</p>
        <p><Link to='/products'>Return to the list</Link></p>
    </section>
}

export default EditProducts