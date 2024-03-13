// AddShopModal.js
import React, { useState } from 'react';

function AddShopModal({ addShop }) {
  const [name, setName] = useState('');
  const [openingTime, setOpeningTime] = useState('');
  const [distance, setDistance] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newShop = {
      id: Date.now(),
      name,
      openingTime,
      distance,
      paymentMethod
    };
    addShop(newShop);
  };

  return (
    <div>
      <h2>Добавить новый магазин</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '500px', gap: '10px'}}>
        <input type="text" placeholder="Название" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="Время открытия" value={openingTime} onChange={e => setOpeningTime(e.target.value)} />
        <input type="text" placeholder="Удаленность в км" value={distance} onChange={e => setDistance(e.target.value)} />
        <input type="text" placeholder="Метод оплаты" value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)} />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default AddShopModal;
