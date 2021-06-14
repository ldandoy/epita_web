import { useEffect, useState } from 'react'

const ListProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products`)
        .then(response => response.json())
        .then(json => {
            setProducts(json)
        })
    }, [])

    return (<>
        <h1>List Products</h1>
        <ul>
            {products.map((product) => (
                <li key={product._id}>{product.name}</li>
            ))}
        </ul>
    </>)
}

export default ListProducts