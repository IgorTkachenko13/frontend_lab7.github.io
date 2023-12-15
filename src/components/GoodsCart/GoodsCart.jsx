import React from 'react';
import styles from './GoodsCart.module.css';

const GoodsCart = ({goods}) => {

    return (
        <div className={styles['goodsCart']}>
            {goods.map((good, index) => (
                <div key={index} className={styles['goodItem']}>
                    <img className={styles['im']} src={good.url} alt={good.name} />
                    <h3 className={styles['goodName']}>{good.name}</h3>
                    <p className={styles['goodPrice']}>{good.price}</p>
                </div>
            ))}
        </div>
    );
};

export default GoodsCart;
