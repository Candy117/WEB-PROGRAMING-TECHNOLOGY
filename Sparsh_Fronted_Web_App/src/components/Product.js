import React from "react";

export default function Product(props) {

  return (
    <div className="row mt-3">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span className="badge bg-secondary">Rs:{props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className="btn btn-dark" onClick={()=>{props.decreaseQuantity(props.index)}}>
            -
          </button>
          <button type="button" className="btn btn-secondary">
            {props.product.quantity}
          </button>
          <button type="button" className="btn btn-dark" onClick={()=>{props.increaseQuantity(props.index)}}>
            +
          </button>
        </div>
      </div>
      <div className="col-2">
         {props.product.quantity*props.product.price}
      </div>
    <div className="col-2 btn btn-danger" onClick={()=>{props.removeItem(props.index)}}>
      Remove
      </div>
    </div>
  );
}
