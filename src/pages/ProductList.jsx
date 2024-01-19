import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/product/ProductSlice";


let k = 1;
//for sl.no allocation

const columns = [
  {
    title: "S.No",
    dataIndex: "id",
  },
  {
    title: "Product Name",
    dataIndex: "productName",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Brand",
    dataIndex: "brand",
  },
  {
    title: "Stock",
    dataIndex: "stock",
  }
];



function ProductList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const data = useSelector((state) => state.product.products);
  console.log(data);

  const data1 = [];
for (let i = 0; i < data.length; i++) {
  data1.push({
    key: i,
    id: k,
    productName: data[i].title,
    category: data[i].category,
    price: data[i].price,
    brand: data[i].brand,
    stock: data[i].quantity,
  });
  k++;
}


  return (
    <div className="mt-4">
      <h3 className="mt-4 title">Products</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
}

export default ProductList;
