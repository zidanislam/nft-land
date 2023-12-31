import { useEffect, useState } from 'react';

const useProductApi = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("./products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },
    [])
    return products
};

export default useProductApi;