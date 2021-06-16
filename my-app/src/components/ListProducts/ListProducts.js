import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import { Link } from 'react-router-dom'

import styles from './ListProducts.module.css'

const ListProducts = () => {
    const [products, setProducts] = useState([])
    let history = useHistory();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products`)
        .then(response => response.json())
        .then(json => {
            setProducts(json)
        })
    }, [])

    const onClickHandler = (productId) => {
        console.log('onClick !' + productId)

        fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        })
        history.push("/products")
    }

    return (<>
        <h1>List Products</h1>
        <ul>
            {products.map((product) => (
                <li key={product._id}>
                    <Link to={`/products/${product._id}/edit`}>{product.name}</Link>&nbsp;
                    <span className={styles.delete} onClick={(e) => onClickHandler(product._id)}>X</span>
                </li>
            ))}
        </ul>
    </>)
}

export default ListProducts