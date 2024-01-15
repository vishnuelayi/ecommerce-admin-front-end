import React, { useState } from "react";
import CostumInput from "../components/CostumInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

function AddProduct() {
  const [desc, setDesc] = useState("");

  const handleDesc = (e) => {
    setDesc(e);
  };
  return (
    <div>
      <h3 className="mt-4 title">Add Product</h3>
      <div className="mt-4">
        <CostumInput
          label="Product Name"
          i_id="addPoductName"
          i_class="form-control"
          type="text"
        />

        <ReactQuill
          theme="snow"
          value={desc}
          onChange={(e) => {
            handleDesc(e);
          }}
          placeholder="Product Description"
        />

        <div className="mt-4">
          <CostumInput
            label="Product Price"
            i_id="addPoductPrice"
            i_class="form-control"
            type="number"
          />
        </div>

        <select className="form-control py-3 mb-3 ">
          <option>Select Category</option>
        </select>

        <select className="form-control py-3 mb-3 ">
          <option>Select Brand</option>
        </select>

        <select className="form-control py-3 mb-3 ">
          <option>Select Color</option>
        </select>

        <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Dragger>
      </div>
      <button className="btn btn-primary mt-3">Add Product</button>
    </div>
  );
}

export default AddProduct;
