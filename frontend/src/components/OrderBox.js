import React from 'react';

function OrderBox() {
    return (
        <div className="OrderBox">
            <h1>Оформление заказа</h1>
            <input placeholder='Номер карты' type='text' />
            <input placeholder='Срок действия' type='text' />
            <input placeholder='CVV/CVC' type='text' />
            <button>Заказать</button>
        </div>
    );
}

export default OrderBox;