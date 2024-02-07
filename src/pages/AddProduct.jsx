import React, { useEffect, useState } from "react";
import CostumInput from "../components/CostumInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/BrandSlice";
import { getProCats } from "../features/product-category/ProductCatSlice";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be positive"),
  quantity: Yup.number()
    .required("Quantity is required")
    .positive("Quantity must be positive")
    .integer("Quantity must be an intiger"),
  description: Yup.string().required("Description is required"),
});

//for image upload

function AddProduct() {
  //getting brand and products-category values from the store (Redux Toolkit)
  const dispatch = useDispatch();

  const brandData = useSelector((state) => state.brand.brands);
  const categoryData = useSelector((state) => state.productcat.productCats);
  console.log("catData:", categoryData);
  console.log("brandData:", brandData);

  useEffect(() => {
    dispatch(getBrands());
  }, []);

  useEffect(() => {
    dispatch(getProCats());
  }, []);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      quantity: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div>
      <h3 className="mt-4 title">Add Product</h3>
      <div className="mt-4">
        <form onSubmit={formik.handleSubmit}>
          <CostumInput
            label="Product Name"
            i_id="addPoductName"
            i_class="form-control"
            type="text"
            name="title"
            onChange={formik.handleChange("title")}
            onBlr={formik.handleBlur("title")}
            value={formik.values.title}
            error={formik.touched.title && formik.errors.title}
          />

          <ReactQuill
            theme="snow"
            value={formik.values.description}
            placeholder="Product Description"
            name="description"
            onChange={formik.handleChange("description")}
            onBlr={formik.handleBlur("description")}
            error={formik.touched.description && formik.errors.description}
          />

          {formik.touched.description && formik.errors.description && (
            <div className="error">{formik.errors.description}</div>
          )}

          <div className="mt-4">
            <CostumInput
              label="Product Price"
              i_id="addPoductPrice"
              i_class="form-control"
              type="number"
              value={formik.values.price}
              onChange={formik.handleChange("price")}
              onBlr={formik.handleBlur("price")}
              error={formik.touched.price && formik.errors.price}
            />
          </div>

          <div className="mt-4">
            <CostumInput
              label="Product Quantity"
              i_id="addPoductQuantity"
              i_class="form-control"
              type="number"
              value={formik.values.quantity}
              onChange={formik.handleChange("quantity")}
              onBlr={formik.handleBlur("quantity")}
              error={formik.touched.quantity && formik.errors.quantity}
            />
          </div>

          <select className="form-control py-3 mb-3 ">
            <option>Select Category</option>
            {categoryData.map((item) => {
              return <option value={item.title}>{item.title}</option>;
            })}
          </select>

          <select className="form-control py-3 mb-3 ">
            <option>Select Brand</option>
            {brandData.map((item) => {
              return <option value={item.title}>{item.title}</option>;
            })}
          </select>

          <select className="form-control py-3 mb-3 ">
            <option>Select Color</option>
          </select>

          <div className="bg-white border-1 p-5 text-center">
            
            <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>

          <button className="btn btn-primary mt-3" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
