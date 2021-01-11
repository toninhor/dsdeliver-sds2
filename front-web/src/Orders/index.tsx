import { useEffect, useState } from 'react';
import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsLists from './ProductsLists';
import { Product, OrderLocationdata } from './types';
import { fetchProducts } from './apis';
import OrderLocation from './OrderLocation';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    },[])

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsLists products={products}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
        </div>
    )
}

export default Orders