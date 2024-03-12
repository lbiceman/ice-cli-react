import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { getProxy } from "./config/proxy/index";

export default defineConfig({
	base: "./", //打包路径
	// 环境变量匹配规则
	// 例如：SELF-TYPE  在这里就需要填写SELF，否则项目获取不到SELF开头的环境变量
	envPrefix: ["VITE", "VUE", "APP", "SELF"],
	server: {
		host: "127.0.0.1",
		port: 1024,
		open: true,
		proxy: getProxy()
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src")
		}
	},
	css: {
		// 预处理器配置项
		preprocessorOptions: {
			less: {
				javascriptEnabled: true
			}
		}
	},
	plugins: [react()]
});
