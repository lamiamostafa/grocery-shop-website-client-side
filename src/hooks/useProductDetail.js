import { useEffect, useState } from "react";

const useProductDetail = productId => {
    const [product, setProduct] = useState({});
    const [reload, setIsReload] = useState(true);
    useEffect(() => {
        const url = `https://desolate-shelf-59513.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId, reload]);
    return [product, reload, setIsReload]
}
export default useProductDetail;