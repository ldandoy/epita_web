import { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom'

const EditProducts = () => {
    let { productId } = useParams()
    let history = useHistory()

    const [product, setProduct] = useState({})

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
            setProduct(product)
        })
    }, [productId])

    const onChangeHandler = (e) => {
        const {name, value} = e.target
        setProduct({...product, [name]: value})
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(response => response.json())
        .then(json => {
            history.push("/products")
        })
    }

    return <section>
        <h1>{product.name}</h1>
        <form onSubmit={onSubmitHandler}>
            <p>Name: <input type="text" name="name" value={product.name} onChange={onChangeHandler} /></p>
            <p>Price: <input type="number" name="price" value={product.price} onChange={onChangeHandler} /> &euro;</p>
            <input type="submit" value="Update" />
        </form>
        <p><Link to='/products'>Return to the list</Link></p>
    </section>
}

export default EditProducts