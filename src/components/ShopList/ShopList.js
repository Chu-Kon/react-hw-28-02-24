// ShopList.js
import React from 'react';
import './ShopList.css';

function ShopList({ shops }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Название</th>
          <th>Время открытия</th>
          <th>Удаленность от центра доставки, км</th>
          <th>Метод оплаты</th>
        </tr>
      </thead>
      <tbody>
        {shops.map(shop => (
          <tr key={shop.id}>
            <td>{shop.name}</td>
            <td>{shop.openingTime}</td>
            <td>{shop.distance}</td>
            <td>{shop.paymentMethod}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ShopList;
