import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import { useDispatch } from "@/libs/react-redux";
import { actions as productActions, hooks as productHooks } from "@/store/product";
import ProductCard from "@/components/ProductCard";
import http from "@/utils/http.js"
import types from "./ProductList.module.scss"

function ProductList() {
    const dispatch = useDispatch();
    const products = productHooks.useList()

    useEffect(() => {
        (async () => {
            const response = await http.get("/products")
            dispatch(productActions.setList(response.data.items))
        })()
    }, [dispatch])

    return (
        <div className={types.wrapper}>
            <h2 className={types.title}>ProductList</h2>
            <ul className={types.list}>
                {products.map((product) => (
                    <Link
                        to={`/${product.slug}`}
                        key={product.id}
                    >
                        <ProductCard product={product} />
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;