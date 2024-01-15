import React from "react";
import CostumInput from "../components/CostumInput";

function AddColor() {
  return (
    <div>
      <h3 className="mt-4 title">Add Color</h3>
      <div className="mt-4">
        <CostumInput
          label="Color"
          i_id="blogCatName"
          i_class="form-control"
          type="color"
        />
      </div>
      <button className="btn btn-primary mt-3">Add Color</button>
    </div>
  );
}

export default AddColor;
