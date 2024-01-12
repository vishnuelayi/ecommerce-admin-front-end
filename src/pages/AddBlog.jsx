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

function AddBlog() {
  const [desc, setDesc] = useState("");

  const handleDesc = (e) => {
    setDesc(e);
  };
  return (
    <div>
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
      <h3 className="mt-4">Add Blog</h3>

      <div>
        <form action="">
        <div className="mt-4">
        <CostumInput type="text" label="Blog Title" name="title" />
        </div>
          
          <select className="form-control py-3 mt-3" name="category">
            <option value="">Select Blog Category</option>
          </select>
          <ReactQuill
            theme="snow"
            value={desc}
            onChange={(e) => {
              handleDesc(e);
            }}
            placeholder="Write your blog here..."
          />
          <button type="submit" className="btn btn-primary mt-3">
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBlog;
