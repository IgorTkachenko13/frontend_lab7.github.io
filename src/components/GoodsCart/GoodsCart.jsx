import React from 'react';
import styles from './GoodsCart.module.css';

const GoodsCart = () => {
    const goods = [
        {
            url: 'https://www.softkey.ua/upload/resize_cache/iblock/801/700_700_1/9HP63EA.jpg',
            name: 'Ноутбук',
            price: '30 000 грн'
        },
        {
            url: 'https://images.philips.com/is/image/PhilipsConsumer/279C9_01-IMS-uk_UA?$jpglarge$&wid=960',
            name: 'Монітор',
            price: '7 000 грн'
        },
        {
            url: 'https://prote.ua/image/cache/img/gallery_ax/Doc-187986-1024x1024.jpg',
            name: 'Комп\'ютер',
            price: '25 000 грн'
        },
        {
            url: 'https://images.avrora.ua/images/detailed/12/52398_004.JPG',
            name: 'Клавіатура',
            price: '1 350 грн'
        },
        {
            url: 'https://brain.com.ua/static/images/prod_img/3/5/U0443335_big.jpg',
            name: 'Комп\'ютерна мишка',
            price: '900 грн'
        },
        {
            url: 'https://ifranko.ua/wp-content/uploads/2023/07/photo1689606425.jpeg',
            name: 'Навушники',
            price: '3 200 грн'
        }
    ];

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
