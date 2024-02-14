import React, { useEffect, useState } from "react";
import CostumInput from "../components/CostumInput";
import ReactQuill from "react-quill";
import * as Yup from "yup";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import Dropzone from "react-dropzone";
import { getBlogCategories } from "../features/blogCat/BlogCatSlice";
import { deleteImg, uploadImg } from "../features/upload/uploadSlice";
import { useFormik } from "formik";
import { addBlog } from "../features/blog/BlogSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
});

function AddBlog() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const blgCat = useSelector((state) => state.blogcat.blogcats);
  const imageData = useSelector((state) => state.upload.images);
  const blogState = useSelector((state) => state.blog);

  const { isSuccess, isError, isLoading } = blogState;

  useEffect(() => {
    dispatch(getBlogCategories());
  }, []);

  useEffect(() => {
    dispatch(uploadImg());
  }, []);

  //react toastify
  useEffect(() => {
    if (isSuccess) {
      toast.success("Blog created successfully!");
    } else if (isError) {
      toast.error("Failed to create blog. Please try again.");
    }
  }, [isLoading, isSuccess, isError]);


  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addBlog(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/blog-list");
      }, 3000);
    },
  });

  return (
    <div>
      <h3 className="mt-4 title">Add Blog</h3>

      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-4">
            <CostumInput
              label="Blog Title"
              i_id="blogTitle"
              i_class="form-control"
              type="text"
              value={formik.values.title}
              onChange={formik.handleChange("title")}
              onBlur={formik.handleBlur("title")}
              error={formik.touched.title && formik.errors.title}
            />
          </div>

          <select
            className="form-control py-3 mt-3 "
            name="category"
            onChange={formik.handleChange("category")}
            onBlur={formik.handleBlur("category")}
            value={formik.values.category}
          >
            <option value="">Select Blog Category</option>
            {blgCat.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })}
          </select>

          <div className="error ">
            {formik.touched.category && formik.errors.category}
          </div>
          <ReactQuill
            theme="snow"
            placeholder="Write your blog here..."
            name="description"
            onChange={formik.handleChange("description")}
            value={formik.values.description}
          />

          <div className="error">
            {formik.touched.description && formik.errors.description}
          </div>

          <div className="bg-white border-1 p-5 text-center mt-3">
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

          <button type="submit" className="btn btn-primary mt-3">
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBlog;
