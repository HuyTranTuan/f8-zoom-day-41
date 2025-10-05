import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useDispatch } from "@/libs/react-redux";
import { actions as productActions, hooks as productHooks } from "@/store/product";
import { hooks as uiHooks } from "@/store/ui";
import ProductCard from "@/components/ProductCard";
import types from "./ProductList.module.scss"
import Loading from "@/components/Loading";

function ProductList() {
    const dispatch = useDispatch();
    const products = productHooks.useList();
    const loading = uiHooks.useLoading();

    useEffect(() => {
        (async () => {
            dispatch(productActions.getList());
        })()
    }, [dispatch])

    return (
        <div className={types.wrapper}>
            <h2 className={types.title}>ProductList</h2>
            {loading
                ? <Loading />
                : (<ul className={types.list}>
                    {products.map(product => {
                        return (
                            <NavLink
                                to={`/${product.slug}`}
                                key={product.id}
                            >
                                <ProductCard product={product} />
                            </NavLink>
                        )
                    })}
                </ul>)
            }
        </div>
    )
}

export default ProductList;