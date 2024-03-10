import React from "react";
import CostumInput from "../components/CostumInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { addCoupon, resetState } from "../features/coupons/CouponSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  name: Yup.string().required("Coupon ID is required"),
  discount: Yup.number()
    .required("Discount is required")
    .positive("Number should be positive"),
  expiry: Yup.date().required("Date is required"),
});

function AddCoupon() {


  const dispatch = useDispatch()

  const couponState = useSelector((state) => state.coupon)

  const { isSuccess, isError, isLoading} = couponState;

  useEffect(() => {
    if (isSuccess) {
      toast.success("Coupon Added Successfully!");
    } else if (isError) {
      toast.error("Failed to add coupon. Please try again.");
    }
  }, [isLoading, isSuccess, isError]);

  const formik = useFormik({
    initialValues: {
      name: "",
      discount: "",
      expiry: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addCoupon(values))
      setTimeout(() => {
        dispatch(resetState())
        formik.resetForm()
      }, 2000)
      

    },
  });

  return (
    <div>
      <h3 className="mt-4 title">Add Coupon</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-4">
          <CostumInput
            label="Coupon ID"
            i_id="couponId"
            i_class="form-control"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange("name")}
            onBlur={formik.handleBlur("name")}
            error={formik.touched.name && formik.errors.name}
          />

          <CostumInput
            label="Discount in %"
            i_id="couponDiscount"
            i_class="form-control"
            type="number"
            value={formik.values.discount}
            onChange={formik.handleChange("discount")}
            onBlur={formik.handleBlur("discount")}
            error={formik.touched.discount && formik.errors.discount}
          />

          <CostumInput
            label="Expiration Date"
            i_id="couponExpiryDate"
            i_class="form-control"
            type="date"
            value={formik.values.expiry}
            onChange={formik.handleChange("expiry")}
            onBlur={formik.handleBlur("expiry")}
            error={formik.touched.expiry && formik.errors.expiry}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Coupon
        </button>
      </form>
    </div>
  );
}

export default AddCoupon;
