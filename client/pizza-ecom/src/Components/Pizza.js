import React, { useState } from "react";

export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("small");

  return (
    <div
      style={{ margin: "70px" }}
      className="border shadow p-3 mb-5 bg-white rounded-lg"
    >
      <h1>{pizza.name}</h1>
      <img
        src="{pizza.image}"
        alt=""
        className="img-fluid"
        style={{ height: "200px", width: "200px" }}
      />
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Variants</p>
          <select
            className="form-control"
            value={variant}
            onChange={(e) => {
              setVariant(e.target.value);
            }}
          >
            {pizza.variants.map((variant) => {
              return <option value={variant}>{variant}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">Price : {pizza.prices[0][variant] * quantity}€</h1>
        </div>

        <div className="m-1 w-100">
          <button className="btn shadow-lg">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
