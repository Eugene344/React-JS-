import React from 'react';
import './BasketProduct.css';

function BasketProduct({ id, image, header, price, setBasket, setBasketPrice, setBasketNumber }) {

  function deleteBasket() {
    setBasket(current => current.filter(product => product.id !== id))
    setBasketPrice(current => current - price)
    setBasketNumber(current => current - 1)
  }

  return (
    <div className="BasketProduct">
      <img src={image} alt='img' />
      <h1>{header}</h1>
      <p>{price} ₽</p>
      <button className='delete' onClick={() => deleteBasket()}>Удалить</button>
      <div className='basketNumber'>
      </div>
    </div>
  );
}

export default BasketProduct;
