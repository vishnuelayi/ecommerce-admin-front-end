import React, { useEffect } from "react";
import CostumInput from "../components/CostumInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addBlogCat,resetState } from "../features/blogCat/BlogCatSlice";



const validationSchema = Yup.object({
  title: Yup.string().required("Blog Category is required"),
});

function AddBlogCategory () {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const newCat = useSelector((state) => state.productcat)

  const { isSuccess, isError, isLoading} = newCat;
  console.log(isLoading);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Blog Category Added Successfully!");
    } else if (isError) {
      toast.error("Failed to create Blog Category. Please try again.");
    }
  }, [isLoading, isSuccess, isError]);

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(addBlogCat(values))
      formik.resetForm();
      setTimeout(() => {
        // dispatch(resetState())
        navigate("/admin/blog-category");
      }, 3000);
    },
  });

  return (
    <div>
      <h3 className="mt-4 title">Add Blog Category</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-4">
          <CostumInput
            label="Blog Category Name"
            i_id="blogCategoryName"
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
         Add Blog Category
        </button>
      </form>
    </div>
  );
}

export default AddBlogCategory;
