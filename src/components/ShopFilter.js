import React, { useState } from 'react';

function ShopFilter({ shops, setShops, initialShops }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const filteredShops = initialShops.filter(shop => shop.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setShops(filteredShops);
  };

  const handleReset = () => {
    setSearchTerm('');
    setShops(initialShops);
  };

  return (
    <div>
      <input type="text" placeholder="Поиск по названию" value={searchTerm} onChange={handleSearchChange} />
      <button onClick={handleSearch}>Поиск</button>
      <button onClick={handleReset}>Сброс</button>
    </div>
  );
}

export default ShopFilter;
