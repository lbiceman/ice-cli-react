import React, { useState } from "react";
import { LockOutlined, MobileOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { LoginFormPage, ProFormCaptcha, ProFormCheckbox, ProFormText } from "@ant-design/pro-components";
import { Divider, message, Tabs } from "antd";
import { useLoginStore } from "@/stores/index";

type LoginType = "phone" | "account";

function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const Login = () => {
	const [loginType, setLoginType] = useState<LoginType>("account");
	const { setUserInfo } = useLoginStore();
	const navigate = useNavigate();
	const onFinish = (values: any) => {
		return delay(1000).then(() => {
			message.success("登录成功🎉🎉🎉");
			setUserInfo(values);
			navigate("/", { replace: true });
		});
	};
	return (
		<div
			style={{
				backgroundColor: "white",
				height: "100vh"
			}}
		>
			<LoginFormPage
				backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
				onFinish={onFinish as any}
				title="ice-cli-react"
				subTitle="一个轻量级react后台管理系统"
				actions={
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column"
						}}
					>
						<Divider plain>
							<span style={{ color: "#CCC", fontWeight: "normal", fontSize: 14 }}>其他登录方式</span>
						</Divider>
					</div>
				}
			>
				<Tabs centered activeKey={loginType} onChange={activeKey => setLoginType(activeKey as LoginType)}>
					<Tabs.TabPane key={"account"} tab={"账号密码登录"} />
					<Tabs.TabPane key={"phone"} tab={"手机号登录"} />
				</Tabs>
				{loginType === "account" && (
					<>
						<ProFormText
							name="username"
							fieldProps={{
								size: "large",
								prefix: <UserOutlined className={"prefixIcon"} />
							}}
							placeholder="用户名: admin or user"
							rules={[
								{
									required: true,
									message: "请输入用户名!"
								}
							]}
						/>
						<ProFormText.Password
							name="password"
							fieldProps={{
								size: "large",
								prefix: <LockOutlined className={"prefixIcon"} />
							}}
							placeholder="密码: 123456"
							rules={[
								{
									required: true,
									message: "请输入密码！"
								}
							]}
						/>
					</>
				)}
				{loginType === "phone" && (
					<>
						<ProFormText
							fieldProps={{
								size: "large",
								prefix: <MobileOutlined className={"prefixIcon"} />
							}}
							name="mobile"
							placeholder={"手机号"}
							rules={[
								{
									required: true,
									message: "请输入手机号！"
								},
								{
									pattern: /^1\d{10}$/,
									message: "手机号格式错误！"
								}
							]}
						/>
						<ProFormCaptcha
							fieldProps={{
								size: "large",
								prefix: <LockOutlined className={"prefixIcon"} />
							}}
							captchaProps={{
								size: "large"
							}}
							placeholder={"请输入验证码"}
							captchaTextRender={(timing, count) => {
								if (timing) {
									return `${count} ${"获取验证码"}`;
								}
								return "获取验证码";
							}}
							name="captcha"
							rules={[
								{
									required: true,
									message: "请输入验证码！"
								}
							]}
							onGetCaptcha={async () => {
								message.success("获取验证码成功！验证码为：1234");
							}}
						/>
					</>
				)}
				<div
					style={{
						marginBlockEnd: 24
					}}
				>
					<ProFormCheckbox noStyle name="autoLogin">
						自动登录
					</ProFormCheckbox>
					<a
						style={{
							float: "right"
						}}
					>
						忘记密码
					</a>
				</div>
			</LoginFormPage>
		</div>
	);
};

export default Login;
