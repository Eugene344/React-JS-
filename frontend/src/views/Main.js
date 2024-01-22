import React, {useState, useEffect} from 'react';
import './Main.css';
import Product from '../components/Product';
import image from '../images/product.jpg'

function Main({ setBasket, setBasketPrice, setBasketNumber, basket, token }) {

  const[products, setProducts] = useState([])

  useEffect(() => {
    
      const api = 'http://localhost:9001/products'

      fetch(api)
      .then(result => result.json())
      .then((result) => {
        console.log(result)
        setProducts(result.data)
      })
  
  }, [])
 
  return (
    <div className="Main">
       {products.map((item) => 
       <Product key={item._id} id={item._id} image={image} header={item.header} price={item.price} 
       setBasket={setBasket} setBasketPrice={setBasketPrice} setBasketNumber={setBasketNumber} 
       basket={basket} token={token} />)}
    </div>
  );
}

export default Main;