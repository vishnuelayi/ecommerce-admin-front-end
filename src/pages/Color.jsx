import React, { useEffect } from "react";
import CostumInput from "../components/CostumInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addColor } from "../features/colors/ColorSlice";


const validationSchema = Yup.object({
  title: Yup.string().required("Color is required"),
});

function AddColor () {
  const navigate = useNavigate();

  const dispatch = useDispatch();

const newColor = useSelector((state) => state.color)

  const { isSuccess, isError, isLoading} = newColor;

  useEffect(() => {
    if (isSuccess) {
      toast.success("Color Added Successfully!");
    } else if (isError) {
      toast.error("Failed to create color. Please try again.");
    }
  }, [isLoading, isSuccess, isError]);

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(addColor(values))
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/color-list");
      }, 3000);
    },
  });

  return (
    <div>
      <h3 className="mt-4 title">Add Color</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-4">
          <CostumInput
            label="Color Name"
            i_id="colorName"
            i_class="form-control"
            type="color"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            error={formik.touched.title && formik.errors.title}
          />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Add Color
        </button>
      </form>
    </div>
  );
}

export default AddColor;
