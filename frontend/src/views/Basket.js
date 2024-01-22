import React from 'react';
import './Basket.css';
import ProductBasket from '../components/BasketProduct';

function Basket({ basketNumber, setBasketNumber, setBasketPrice, setModalBox, basket, setBasket, basketPrice }) {
  function ShowOrderButton() {
    if (basketNumber > 0) {
      return (<><button className="Order" onClick={() => setModalBox('OrderBox')}><p>Итого: {basketPrice}₽</p>Купить</button></>)
    }
  }

  return (
    <div className="Basket">
      <h1>Корзина</h1>
      <div className="BasketContent">
        {basket.map((item) => <ProductBasket key={item.id} id={item.id} image={item.image} header={item.header} price={item.price} setBasket={setBasket} setBasketPrice={setBasketPrice} setBasketNumber={setBasketNumber} />)}
      </div>
      <ShowOrderButton />
    </div>
  );
}

export default Basket;
