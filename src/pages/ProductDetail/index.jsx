import { useEffect } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';

import { useDispatch } from "@/libs/react-redux";
import { actions as productActions, hooks as productHooks } from "@/store/product";
import styles from './ProductDetail.module.scss';
import Button from "@/components/Button";

function ProductDetail() {
    const { slug } = useParams();
    const dispatch = useDispatch();

    const productDetail = productHooks.useDetail();

    useEffect(() => {
        if (slug) {
            dispatch(productActions.getDetail(slug));
        }
    }, [dispatch, slug]);

    return (
        <section className={styles.wrapper}>
            <div className={styles.header}>
                <NavLink to="/" className={styles.back} >
                    <Button children={
                        <span>←</span>
                    } rounded md />
                </NavLink>
            </div>

            {productDetail && (
                <div className={styles.body}>
                    <div className={styles["img-container"]}>
                        <img
                            src={productDetail.thumbnail}
                            alt={productDetail.title}
                            className={styles.img}
                        />
                        {productDetail.discountPercentage > 0 && (
                            <span className={styles.badge}>
                                - {productDetail.discountPercentage}%
                            </span>
                        )}
                    </div>

                    <div className={styles.content}>
                        <h1 className={styles.title}>{productDetail.title}</h1>

                        <div className={styles.description}>
                            <span className={styles.brand}>
                                {productDetail.brand}
                            </span>
                            <span className={styles.category}>
                                {productDetail.category}
                            </span>
                            <span className={styles.sku}>
                                SKU: {productDetail.sku}
                            </span>
                        </div>

                        <div className={styles.prices}>
                            <span className={styles.discount}>
                                $
                                {(productDetail.discountPercentage > 0
                                    ? (productDetail.price *
                                        (100 -
                                            productDetail.discountPercentage)) /
                                    100
                                    : productDetail.price
                                ).toFixed(2)}
                            </span>

                            {productDetail.discountPercentage > 0 && (
                                <span className={styles.price}>
                                    ${productDetail.price.toFixed(2)}
                                </span>
                            )}

                        </div>
                        <div className={styles.rating}>
                            <span>
                                ★ {Number(productDetail.rating || 0).toFixed(1)} -
                                In stock: {productDetail.stock}</span>
                        </div>

                        <p className={styles.desc}>{productDetail.description}</p>

                        <div className={styles.actions}>
                            <Button children={
                                <span>Add to cart</span>
                            } rounded sm primary />
                        </div>

                        <div className={styles.sidedetail}>
                            <span>
                                Minimum Order:{' '}
                                {productDetail.minimumOrderQuantity}
                            </span>
                            <span>Weight: {productDetail.weight}</span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default ProductDetail;