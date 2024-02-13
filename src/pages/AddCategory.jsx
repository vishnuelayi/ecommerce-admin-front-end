import React, { useEffect } from "react";
import CostumInput from "../components/CostumInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addCategory } from "../features/product-category/ProductCatSlice";

const validationSchema = Yup.object({
  title: Yup.string().required("Category  is required"),
});

function AddCategory () {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const newCategory = useSelector((state) => state.productcat);

  const { isSuccess, isError, isLoading} = newCategory;

  useEffect(() => {
    if (isSuccess) {
      toast.success("Category created successfully!");
    } else if (isError) {
      toast.error("Failed to create category. Please try again.");
    }
  }, [isLoading, isSuccess, isError]);

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(addCategory(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/category-list");
      }, 3000);
    },
  });

  return (
    <div>
      <h3 className="mt-4 title">Add Category</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-4">
          <CostumInput
            label="Category Name"
            i_id="categoryName"
            i_class="form-control"
            type="text"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            error={formik.touched.title && formik.errors.title}
          />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Add Category
        </button>
      </form>
    </div>
  );
}

export default AddCategory;
