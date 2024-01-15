import React from "react";
import CostumInput from "../components/CostumInput";

function AddCoupon() {
  return (
    <div>
      <h3 className="mt-4 title">Add Coupon</h3>
      <div className="mt-4">
        <CostumInput
          label="Coupon ID"
          i_id="couponId"
          i_class="form-control"
          type="text"
        />

        <CostumInput
          label="Discount in %"
          i_id="couponDiscount"
          i_class="form-control"
          type="text"
        />

        <CostumInput
          label="Expiration Date"
          i_id="couponExpiryDate"
          i_class="form-control"
          type="date"
        />
      </div>
      <button className="btn btn-primary mt-3">Add Coupon</button>
    </div>
  );
}

export default AddCoupon;
