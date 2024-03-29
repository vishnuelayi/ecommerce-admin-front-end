import React, { useEffect, useState } from "react";
import CostumInput from "../components/CostumInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";
import { useFormik } from "formik";
import { Select } from "antd";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/BrandSlice";
import { getProCats } from "../features/product-category/ProductCatSlice";
import { deleteImg, uploadImg } from "../features/upload/uploadSlice";
import { getColors } from "../features/colors/ColorSlice";

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



function AddProduct() {
  //getting brand and products-category values from the store (Redux Toolkit)
  const dispatch = useDispatch();

  const [color, setColor] = useState("");

  const handleColor = (e) => {
    setColor(e);
  }

  const brandData = useSelector((state) => state.brand.brands);
  const categoryData = useSelector((state) => state.productcat.productCats);
  const colorData = useSelector((state) => state.color.colors);
  const imageData = useSelector((state) => state.upload.images);
  console.log("catData:", categoryData);
  console.log("brandData:", brandData);
  console.log("images:", imageData);
  console.log("color:", colorData);

  useEffect(() => {
    dispatch(getBrands());
  }, []);

  useEffect(() => {
    dispatch(getProCats());
  }, []);

  useEffect(() => {
    dispatch(uploadImg());
  }, []);

  useEffect(() => {
    dispatch(getColors());
  }, []);

  const colors = [];
  colorData.forEach((i, j) => {
    colors.push({
      _id: i._id,
      color: i.title,
    });
  });

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
            onChange={formik.handleChange}
            onBlr={formik.handleBlur}
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

          <div className="mt-4 mb-4">
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

          <select className="form-control py-3 mb-4 ">
            <option>Select Category</option>
            {categoryData.map((item) => {
              return <option value={item.title}>{item.title}</option>;
            })}
          </select>

          <select className="form-control py-3 mb-4 ">
            <option>Select Brand</option>
            {brandData.map((item) => {
              return <option value={item.title}>{item.title}</option>;
            })}
          </select>

          <Select
            mode="multiple"
            allowClear
            className="w-100 mb-4"
            placeholder="Select Color"
            
            options={colors}
          />

          <div className="bg-white border-1 p-5 text-center">
            <Dropzone
              onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
            >
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

          {/* display the uploaded image */}
          <div className="showimages d-flex flex-wrap gap-3">
            {imageData.map((i, j) => {
              return (
                <div key={j} className="position-relative">
                  <button
                    className="btn-close position-absolute "
                    type="button"
                    style={{ top: "4px", right: "4px" }}
                    onClick={() => {
                      dispatch(deleteImg(i.asset_id));
                    }}
                  ></button>
                  <img src={i.url} width={200} height={200} />
                </div>
              );
            })}
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
