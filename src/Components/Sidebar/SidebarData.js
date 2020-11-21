import React from "react";
import { AiFillHome, AiFillShopping } from "react-icons/ai";
import { FaUser, FaBox, FaTag, FaReceipt } from "react-icons/fa";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiFillHome />,
    cName: "sidebar__item",
  },
  {
    title: "Shop",
    path: "/shop",
    icon: <AiFillShopping />,
    cName: "sidebar__item",
  },
  {
    title: "User",
    path: "/",
    icon: <FaUser />,
    cName: "sidebar__item",
  },
  {
    title: "Product",
    path: "/product",
    icon: <FaBox />,
    cName: "sidebar__item",
  },
  {
    title: "Category",
    path: "/category",
    icon: <FaTag />,
    cName: "sidebar__item",
  },
  {
    title: "Order",
    path: "/order",
    icon: <FaReceipt />,
    cName: "sidebar__item",
  },
];
