import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/CustomerSlice";
import productReducer from "../features/product/ProductSlice";
import brandReducer from "../features/brand/BrandSlice";
import colorReducer from "../features/colors/ColorSlice";
import productCatReducer from "../features/product-category/ProductCatSlice";
import couponReducer from "../features/coupons/CouponSlice";
import blogReducer from "../features/blog/BlogSlice";
import blogCatReducer from "../features/blogCat/BlogCatSlice";
import enquiryReducer from "../features/enquiry/EnquirySlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    productcat: productCatReducer,
    color: colorReducer,
    coupon: couponReducer,
    blog: blogReducer,
    blogcat: blogCatReducer,
    enquiry: enquiryReducer,

    // add your reducers for the store here
  },
});
