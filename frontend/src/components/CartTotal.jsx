import React, { useContext } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount, selectedCounty, setSelectedCounty } = useContext(ShopContext);

  // List of all 47 counties in Kenya
  const counties = [
    "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo Marakwet", "Embu", "Garissa",
    "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi",
    "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos",
    "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a",
    "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri",
    "Samburu", "Siaya", "Taita Taveta", "Tana River", "Tharaka Nithi", "Trans Nzoia",
    "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
  ];

  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal;

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'Booking'} text2={'Totals'} />
      </div>

      {/* Dropdown for selecting county */}
      {/* <div className="mt-3">
        <label className="block text-sm font-medium text-gray-700">Select County:</label>
        <select
          className="mt-1 p-2 border rounded w-full"
          value={selectedCounty}
          onChange={(e) => setSelectedCounty(e.target.value)}>
          {counties.map((county) => (
            <option key={county} value={county}>
              {county} {county === "Nairobi" ? "(Free Delivery)" : ""}
            </option>
          ))}
        </select>
      </div> */}

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency} {subtotal.toFixed(2)}</p>
        </div>

        {/* <hr />
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee.toFixed(2)}</p>
        </div> */}

        <hr />
        <div className='flex justify-between'>
          <b>Total</b>
          <b>{currency} {total.toFixed(2)}</b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
