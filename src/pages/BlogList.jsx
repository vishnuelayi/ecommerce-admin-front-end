import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../features/blog/BlogSlice";

const columns = [
  {
    title: "S.No",
    dataIndex: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Author",
    dataIndex: "author",
  },
];


function BlogList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  const data = useSelector((state) => state.blog.blogs);
  // console.log("data", data);

  const data1 = [];
for (let i = 0; i < data.length; i++) {
  data1.push({
    key: i,
    id: i + 1,
    title: data[i].title,
    description: data[i].description,
    category: data[i].category,
    author: data[i].auther,
  });
}



  return (
    <div className="mt-4">
      <h3 className="mt-4 title">Blog List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
}

export default BlogList;
