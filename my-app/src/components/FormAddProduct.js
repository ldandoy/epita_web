import { useState } from "react"
import { useHistory } from "react-router-dom";

const FormAddProduct = () => {
    let history = useHistory();

    const [product, setProduct] = useState({
        name: "",
        price: 0
    })

    const onChangeHandler = (e) => {
        const {name, value} = e.target

        setProduct({...product, [name]: value})
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(product)

        fetch(`${process.env.REACT_APP_API_URL}/products`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            history.push("/products")
        })
    }

    return (<>
        <h2>Add a new product</h2>
        <form onSubmit={onSubmitHandler}>
            <input type="text" name="name" value={product.name} onChange={onChangeHandler} />
            <input type="number" name="price" value={product.price} onChange={onChangeHandler} />
            <input type="submit" value="Create" />
        </form>
    </>)
}

export default FormAddProduct