import React, { useContext, useEffect, useState, useRef } from 'react'
import { ShopContext } from '../context/ShopContext'

const ExtraDetails = () => {
  const {navigate} = useContext(ShopContext);
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    nationality: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    country: "",
    emergencyName: "",
    emergencyRelationship: "",
    emergencyPhone: "",

    // Travel Details
    travelType: "",
    departureDate: "",
    returnDate: "",
    adults: 1,
    children: 0,
    activityPreference: "",

    // Flight
    flightRequired: "",
    departureAirport: "",
    airline: "",
    flightClass: "",

    // Ground Transport
    airportTransfer: "",
    vehicleType: "",
    pickupLocation: "",
    dropoffLocation: "",
  });

    const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveDetails = () => {
        localStorage.setItem(
        "extraDetails",
        JSON.stringify(formData));
        navigate("/place-order");
    };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Extra Booking Details
      </h1>

      <p className="text-gray-500 mb-8">
        Kindly provide the traveller information below.
      </p>

      {/*Traveller Info*/}
      <div className="bg-white rounded-xl shadow-md border p-6">
        <h2 className="text-xl font-semibold mb-6 border-b pb-3">
        Traveller Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={onChangeHandler}
              placeholder="Enter full name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-2 font-medium">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={onChangeHandler}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* Nationality */}

          <div>
            <label className="block mb-2 font-medium">
              Nationality
            </label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={onChangeHandler}
              placeholder="Nationality"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={onChangeHandler}
              placeholder="07XXXXXXXX"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
              placeholder="example@email.com"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-2 font-medium">
              Physical Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={onChangeHandler}
              placeholder="Physical Address"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* City */}
          <div>
            <label className="block mb-2 font-medium">
              City / Town
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={onChangeHandler}
              placeholder="City"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Country */}

          <div>
            <label className="block mb-2 font-medium">
              Country
            </label>

            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={onChangeHandler}
              placeholder="Country"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold border-b pb-3 mb-6">
            Emergency Contact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div>
              <label className="block mb-2 font-medium">
                Contact Name
              </label>

              <input
                type="text"
                name="emergencyName"
                value={formData.emergencyName}
                onChange={onChangeHandler}
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Relationship
              </label>

              <input
                type="text"
                name="emergencyRelationship"
                value={formData.emergencyRelationship}
                onChange={onChangeHandler}
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Phone Number
              </label>

              <input
                type="tel"
                name="emergencyPhone"
                value={formData.emergencyPhone}
                onChange={onChangeHandler}
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>
          </div>
        </div>
      </div>

      {/*Travel Info*/}
       <div className="bg-white rounded-xl shadow-md border p-6 mt-8">
            <h2 className="text-xl font-semibold border-b pb-3 mb-6">
                Travel Details
            </h2>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
            <label className="block mb-2 font-medium">
                Travel Type
            </label>

            <select
                name="travelType"
                value={formData.travelType}
                onChange={onChangeHandler}
                className="w-full border rounded-lg px-4 py-3">
                <option value="">Select Travel Type</option>
                <option>Safari</option>
                <option>Beach Holiday</option>
                <option>Adventure Tour</option>
                <option>Honeymoon</option>
                <option>Business Travel</option>
                <option>Group Tour</option>
                <option>Family Vacation</option>
                <option>Educational Tour</option>
            </select>
        </div>

        <div>
            <label className="block mb-2 font-medium">
                Number of Adults
            </label>

            <input
                type="number"
                name="adults"
                value={formData.adults}
                onChange={onChangeHandler}
                className="w-full border rounded-lg px-4 py-3"/>
        </div>

        <div>
            <label className="block mb-2 font-medium">
                Departure Date
            </label>

            <input
                type="date"
                name="departureDate"
                value={formData.departureDate}
                onChange={onChangeHandler}
                className="w-full border rounded-lg px-4 py-3"/>
        </div>

        <div>
            <label className="block mb-2 font-medium">
                Return Date
            </label>

            <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={onChangeHandler}
                className="w-full border rounded-lg px-4 py-3"
            />
        </div>

        <div>
            <label className="block mb-2 font-medium">
                Number of Children
            </label>

            <input
                type="number"
                name="children"
                value={formData.children}
                onChange={onChangeHandler}
                className="w-full border rounded-lg px-4 py-3"
            />
        </div>


          <div>
                <label className="block mb-2 font-medium">
                Activity Preference
                </label>
                <select
                    name="activityPreference"
                    value={formData.activityPreference}
                    onChange={onChangeHandler}
                    className="w-full border rounded-lg px-4 py-3"
                >
                    <option value="">Select Class</option>
                    <option>Game Drives</option>
                    <option>Boat Rides</option>
                    <option>Hiking</option>
                    <option>Mountain Climbing</option>
                    <option>Cultural Tours</option>
                    <option>Bird Watching</option>
                    <option>Photography</option>
                    <option>Hot Air Balloon Safari</option>
                    <option>Snorkeling</option>
                    <option>Scuba Diving</option>
                    <option>Night Game Drives</option>
                    <option>Cycling</option>
                    <option>Fishing</option>
                </select>
            </div>

        </div>
       </div>

       {/*Transport Info*/}
       <div className="bg-white rounded-xl shadow-md border p-6 mt-8">
            <h2 className="text-xl font-semibold border-b pb-3 mb-6">
                Transportation Details
            </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
                <label className="block mb-2 font-medium">
                    Flight Booking Required?
                </label>

                <select
                    name="flightRequired"
                    value={formData.flightRequired}
                    onChange={onChangeHandler}
                    className="w-full border rounded-lg px-4 py-3"
                >
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>

            <div>
                <label className="block mb-2 font-medium">
                    Preferred Departure Airport
                </label>

                <input
                    type="text"
                    name="departureAirport"
                    value={formData.departureAirport}
                    onChange={onChangeHandler}
                    className="w-full border rounded-lg px-4 py-3"
                />
            </div>

            <div>
                <label className="block mb-2 font-medium">
                    Preferred Airline
                </label>

                <input
                    type="text"
                    name="airline"
                    value={formData.airline}
                    onChange={onChangeHandler}
                    className="w-full border rounded-lg px-4 py-3"
                />
            </div>

            <div>
                <label className="block mb-2 font-medium">
                    Flight Class
                </label>
                <select
                    name="flightClass"
                    value={formData.flightClass}
                    onChange={onChangeHandler}
                    className="w-full border rounded-lg px-4 py-3"
                >
                    <option value="">Select Class</option>
                    <option>Economy</option>
                    <option>Premium Economy</option>
                    <option>Business Class</option>
                    <option>First Class</option>
                </select>
            </div>

            <div>
                <label className="block mb-2 font-medium">
                    Airport Transfer Required?
                </label>

                <select
                    name="airportTransfer"
                    value={formData.airportTransfer}
                    onChange={onChangeHandler}
                    className="w-full border rounded-lg px-4 py-3"
                >
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>

            <div>
                <label className="block mb-2 font-medium">
                    Preferred Vehicle
                </label>

                <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={onChangeHandler}
                    className="w-full border rounded-lg px-4 py-3"
                >
                    <option value="">Select Vehicle</option>
                    <option>Sedan</option>
                    <option>Van</option>
                    <option>Safari Land Cruiser</option>
                    <option>Safari Van</option>
                    <option>Bus / Coach</option>
                </select>
            </div>

            <div>
                <label className="block mb-2 font-medium">
                    Pick-up Location
                </label>
                <input
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={onChangeHandler}
                    className="w-full border rounded-lg px-4 py-3"
                />
            </div>
            <div>
                <label className="block mb-2 font-medium">
                    Drop-off Location
                </label>

                <input
                    type="text"
                    name="dropoffLocation"
                    value={formData.dropoffLocation}
                    onChange={onChangeHandler}
                    className="w-full border rounded-lg px-4 py-3"
                />
            </div>
        </div>
       </div>

        {/* Payment Details */}
        <div className="bg-white rounded-xl shadow-md border p-6 mt-8">
            <h2 className="text-xl font-semibold border-b pb-3 mb-6">
                Payment Details
            </h2>
        <p className="text-gray-500 mb-6">
        Kindly use one of the payment methods below to complete your booking.
        </p>

        <div className="space-y-4">
        {/* Mobile Money */}
        <div className="border rounded-lg p-4 bg-green-50 border-green-200">

            <h3 className="font-semibold text-lg text-green-700">
                Mobile Money (M-Pesa)
            </h3>
            <p className="text-gray-700 mt-2">
                <span className="font-medium">Phone:</span> 0713486157
            </p>
        </div>

        {/* PayPal */}
        <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
            <h3 className="font-semibold text-lg text-blue-700">
                PayPal
            </h3>
            <p className="text-gray-700 mt-2">
                <span className="font-medium">Email:</span> veeluxesafaris@gmail.com
            </p>
        </div>

          <button
            type="button"
            onClick={handleSaveDetails}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition">
            Save Details
       </button>

        </div>
        </div>

    </div>
  );
};
export default ExtraDetails;