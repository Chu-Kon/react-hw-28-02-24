import React, { useState } from 'react';
import ShopList from './components/ShopList/ShopList';
import ShopFilter from './components/ShopFilter';
import AddShopModal from './components/AddShopModal';

function App() {
  const [shops, setShops] = useState([
    // { id: 1, name: 'Первый магаз', openingTime: '09:00', distance: 5, paymentMethod: 'картой' },
    // { id: 2, name: 'Магазин 2', openingTime: '10:00', distance: 8, paymentMethod: 'наличными' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [initialShops, setInitialShops] = useState(shops);

  const addShop = (newShop) => {
    setShops([...shops, newShop]);
    setInitialShops([...shops, newShop]); 
    setShowModal(false);
  };

  return (
    <div>
      <h1>Список магазинов</h1>
      <button onClick={() => setShowModal(!showModal)} style={{ margin: '10px' }}>Добавить магазин</button>
      <ShopFilter shops={shops} setShops={setShops} initialShops={initialShops} />
      <ShopList shops={shops} />
      {showModal && <AddShopModal addShop={addShop} />}
    </div>
  );
}

export default App;
