import React, { Suspense, lazy } from "react";
import { ConfigProvider, Spin } from "antd";
import { useGlobalStore } from "@/stores/index";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "antd/dist/reset.css";

dayjs.locale("zh-cn");

// 懒加载布局容器
const BasicLayout = lazy(() => import("./layout"));

// 判断权限
export function authLoader() {
	return { isAdmin: true };
}

const App: React.FC = () => {
	// 获取全局store，里边有一个颜色，用于设置主题色
	const { primaryColor } = useGlobalStore();

	return (
		// antd全局化配置
		<ConfigProvider
			locale={zhCN}
			theme={{
				token: {
					colorPrimary: primaryColor
				}
			}}
		>
			{/* 异步加载组件 */}
			<Suspense fallback={<Spin size="large" className="globa_spin" />}>
				<BasicLayout />
			</Suspense>
		</ConfigProvider>
	);
};
export default App;
