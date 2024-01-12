
import React from "react";
import CostumInput from "../components/CostumInput";

function AddCategory() {
  return (
    <div>
      <h3 className="mt-4">Add Category</h3>
      <div className="mt-4">
        <CostumInput
          label="Category Name"
          i_id="blogCatName"
          i_class="form-control"
          type="text"
        />
      </div>
      <button className="btn btn-primary mt-3">Add Category</button>
    </div>
  );
}

export default AddCategory;
