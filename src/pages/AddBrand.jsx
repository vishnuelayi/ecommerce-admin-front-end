import React, { useEffect } from "react";
import CostumInput from "../components/CostumInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addBrand } from "../features/brand/BrandSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  title: Yup.string().required("Brand is required"),
});

function AddBrand() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const newBrand = useSelector((state) => state.brand);

  const { isSuccess, isError, isLoading, createBrand } = newBrand;

  useEffect(() => {
    if (isSuccess) {
      toast.success("Brand Added Successfully");
    }
    if (isError) {
      toast.error("Something went wrong");
    }
  }, [isError, isSuccess, isLoading]);

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(addBrand(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/brand-list");
      }, 3000);
    },
  });

  return (
    <div>
      <h3 className="mt-4 title">Add Brand</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-4">
          <CostumInput
            label="Brand Name"
            i_id="brandName"
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
          Add Brand
        </button>
      </form>
    </div>
  );
}

export default AddBrand;
