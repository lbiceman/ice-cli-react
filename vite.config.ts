import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
export default defineConfig({
	server: {
		port: 1024
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "src")
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
