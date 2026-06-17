import React, { useContext, useState } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {
  const { getCartAmount } = useContext(ShopContext);

  const [selectedCurrency, setSelectedCurrency] = useState('KES');

  // Exchange rates relative to KES
  const exchangeRates = {
    KES: 1,
    USD: 0.00773,
    EUR: 0.00710,
    GBP: 0.00600,
  };

  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal;

  const convertAmount = (amount) => {
    return amount * exchangeRates[selectedCurrency];
  };

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: selectedCurrency,
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={'Booking'} text2={'Totals'} />
      </div>

      {/* Currency Selector */}
      <div className="mt-4 mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Display Currency
        </label>

        <select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        >
          <option value="KES">KES - Kenyan Shilling</option>
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{formatPrice(convertAmount(subtotal))}</p>
        </div>

        <hr />

        <div className="flex justify-between">
          <b>Total</b>
          <b>{formatPrice(convertAmount(total))}</b>
        </div>
      </div>

      {selectedCurrency !== 'KES' && (
        <div className="mt-4 text-xs text-gray-500">
          <p>
            Final payment is processed in Kenyan Shillings (KES).
            Exchange rates are approximate and for display purposes only.
          </p>
        </div>
      )}
    </div>
  );
};

export default CartTotal;