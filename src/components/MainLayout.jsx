import React, { useState } from "react";
import { RiDashboard2Line } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { FaClipboardList as ProductListIcon } from "react-icons/fa";
import { TbBrandBumble as BrandIcon } from "react-icons/tb";
import { MdOutlinePlaylistAddCheckCircle as BrandListIcon } from "react-icons/md";
import { BiCategory as CategoryIcon } from "react-icons/bi";
import { TbListDetails as CategoryListIcon } from "react-icons/tb";
import { IoMdColorFill as ColorIcon } from "react-icons/io";
import { MdFormatColorFill as ColorListIcon } from "react-icons/md";
import { FaShippingFast as OrdersIcon } from "react-icons/fa";
import { FaBlog as BlogsIcon } from "react-icons/fa";
import { FaFileCircleQuestion as EnquiriesIcon } from "react-icons/fa6";
import { MdNoteAdd as AddBlogIcon } from "react-icons/md";
import { RiFileListFill as BlogList } from "react-icons/ri";
import { GrBlog as BlogCategoryIcon } from "react-icons/gr";
import { MdOutlineNoteAdd as AddBlogCategory } from "react-icons/md";
import { IoNotifications as NotificationIcon } from "react-icons/io5";
import { RiCoupon2Fill as CouponIcon } from "react-icons/ri";
import { RiAddCircleFill as AddIcon } from "react-icons/ri";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useNavigate, Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
          <h2 className="text-white fs-5 text-center py-3 mb-0">Creative</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <RiDashboard2Line className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <IoPeople className="fs-4" />,
              label: "Customers",
            },
            {
              key: "catelog",
              icon: <FaCartShopping className="fs-4" />,
              label: "Catelog",
              children: [
                {
                  key: "add-product",
                  icon: <FaCartPlus className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "product-list",
                  icon: <ProductListIcon className="fs-4" />,
                  label: "Product List",
                },
                {
                  key: "add-brand",
                  icon: <BrandIcon className="fs-4" />,
                  label: "Add Brand",
                },
                {
                  key: "brand-list",
                  icon: <BrandListIcon className="fs-4" />,
                  label: "Brand List",
                },
                {
                  key: "add-category",
                  icon: <CategoryIcon className="fs-4" />,
                  label: "Add Category",
                },
                {
                  key: "category-list",
                  icon: <CategoryListIcon className="fs-4" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <ColorIcon className="fs-4" />,
                  label: "Add Color",
                },
                {
                  key: "color-list",
                  icon: <ColorListIcon className="fs-4" />,
                  label: "Color List",
                },
                {
                  key: "add-coupon",
                  icon: <AddIcon className="fs-4" />,
                  label: "Add Coupon",
                },
                {
                  key: "coupon-list",
                  icon: <CouponIcon className="fs-4" />,
                  label: "Coupon List",
                },
              ],
            },
            {
              key: "orders",
              icon: <OrdersIcon className="fs-4" />,
              label: "Orders",
            },
            {
              key: "enquiries",
              icon: <EnquiriesIcon className="fs-4" />,
              label: "Enquiries",
            },
            {
              key: "blogs",
              icon: <BlogsIcon className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "blog-list",
                  icon: <BlogList className="fs-4" />,
                  label: "Blog List",
                },
                {
                  key: "add-blog",
                  icon: <AddBlogIcon className="fs-4" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-category",
                  icon: <BlogCategoryIcon className="fs-4" />,
                  label: "Blog Categories",
                },
                {
                  key: "add-blog-category",
                  icon: <AddBlogCategory className="fs-4" />,
                  label: "Add Blog Category",
                },
              ],
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex align-items-center gap-3">
            <div className="position-relative mr-5">
              <NotificationIcon className="fs-3" />
              <span className="badge bg-danger rounded-circle p-1 position-absolute">
                3
              </span>
            </div>
            <div>
              <div
                className="d-flex align-items-center gap-3 dropdown"
                
              >
                <div role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                  <img
                    className="w-0.5"
                    src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"
                    width={32}
                    height={32}
                  />
                </div>

                <div>
                  <h5 className="m-0 p-0">Joseph Ann</h5>
                  {/* <p className="p-0 m-0">joshephann@gamil.com</p> */}
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
