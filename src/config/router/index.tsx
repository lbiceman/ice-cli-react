import React, { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { HomeOutlined, EditOutlined, TableOutlined, BarsOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";
import ErrorPage from "@/components/ErrorPage";
import LoginPage from "../../layout/components/Login";
import App, { authLoader } from "../../App";

const Dashboard = lazy(() => import("../../pages/Dashboard"));
const FormPage = lazy(() => import("../../pages/FormPage"));
const TablePage = lazy(() => import("../../pages/TablePage"));
const AccountCenter = lazy(() => import("../../pages/AccountPage/AccountCenter"));
const AccountSettings = lazy(() => import("../../pages/AccountPage/AccountSettings"));
const DetailPage = lazy(() => import("../../pages/DetailPage"));
const SysUser = lazy(() => import("../../pages/SysPage/user/index"));
const SysMenu = lazy(() => import("../../pages/SysPage/menu/index"));

const routes = [
	{
		path: "/",
		element: <App />,
		// loader函数，在渲染之前向路由元素提供数据，可以用于判断权限
		// { params } 参数
		loader: authLoader,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{
						index: true,
						title: "首页",
						icon: <HomeOutlined />,
						element: <Dashboard />
					},
					{
						path: "form",
						title: "表单页",
						icon: <EditOutlined />,
						element: <FormPage />
					},
					{
						path: "table",
						title: "列表页",
						icon: <TableOutlined />,
						element: <TablePage />
					},
					{
						path: "detail",
						title: "详情页",
						icon: <BarsOutlined />,
						element: <DetailPage />
					},
					{
						path: "account",
						title: "个人页",
						icon: <UserOutlined />,
						children: [
							{
								path: "/account/center",
								title: "个人中心",
								element: <AccountCenter />
							},
							{
								path: "/account/settings",
								title: "个人设置",
								element: <AccountSettings />
							}
						]
					},
					{
						path: "sys",
						title: "系统管理",
						icon: <SettingOutlined />,
						children: [
							{
								path: "/sys/user",
								title: "用户管理",
								element: <SysUser />
							},
							{
								path: "/sys/menu",
								title: "菜单管理",
								element: <SysMenu />
							}
						]
					},
					{
						path: "*",
						element: <Navigate to="/" replace={true} />
					}
				]
			}
		]
	},
	{
		path: "/login",
		element: <LoginPage />
	}
];

// 导出菜单json，供项目使用
export { routes };

// 创建路由   用于管理历史堆栈
export default createBrowserRouter(routes);
