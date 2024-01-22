import React from 'react';
import './Product.css';

function Product({ id, image, header, price, basket, token, setBasket, setBasketPrice, setBasketNumber }) {

  const product = {
    id: id,
    image: image,
    header: header,
    price: price
  }

  function InBasket() {
    const index = basket.findIndex (value => value.id === product.id)

    if (index === -1) {
      setBasket(prevState => [...prevState, product])
      setBasketPrice(current => current + product.price)
      setBasketNumber(current => current + 1)
    } else {
      return
    }
  }

  function InBasketButton() {
    if (token !== null) {
      return (
        <>
          <button className='buy' onClick={() => InBasket()}>Купить</button>
        </>
      )
    } else {
      return (
        <>
          <h1>Авторизуйтесь!</h1>
        </>
      )
    }
  }

  return (
    <div className="Product">
      <img src={product.image} alt='img' />
      <h1>{product.header}</h1>
      <p>{product.price} рублей</p>
      <InBasketButton />
    </div>
  );
}

export default Product;