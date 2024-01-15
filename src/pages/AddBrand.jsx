import React from "react";
import CostumInput from "../components/CostumInput";

function AddBrand() {
  return (
    <div>
      <h3 className="mt-4 title">Add Brand</h3>
      <div className="mt-4">
        <CostumInput
          label="Blog Category Name"
          i_id="blogCatName"
          i_class="form-control"
          type="text"
        />
      </div>
      <button className="btn btn-primary mt-3">Add Brand</button>
    </div>
  );
}

export default AddBrand;
