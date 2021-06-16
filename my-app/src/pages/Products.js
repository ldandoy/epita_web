import ListProducts from '../components/ListProducts/ListProducts'
import FormAddProduct from '../components/FormAddProduct'

const Products = () => {
    return <section>
        <h1>Products</h1>
        <FormAddProduct />
        <ListProducts />
    </section>
}

export default Products