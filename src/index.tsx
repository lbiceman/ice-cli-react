import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./config/router";

// 创建根节点
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// 渲染到dom
root.render(<RouterProvider router={router} />);
