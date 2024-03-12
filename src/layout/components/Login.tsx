import React, { useState } from "react";
import { LockOutlined, MobileOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { LoginFormPage, ProFormCaptcha, ProFormCheckbox, ProFormText } from "@ant-design/pro-components";
import { Divider, message, Tabs } from "antd";
import { useUserStore } from "@/stores/index";

type LoginType = "phone" | "account";

function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const Login = () => {
	const [loginType, setLoginType] = useState<LoginType>("account");
	const { setUser } = useUserStore();
	const navigate = useNavigate();
	const onFinish = (values: any) => {
		return delay(1000).then(() => {
			message.success("登录成功🎉🎉🎉");
			const userData = {
				id: "1",
				name: "lbiceman",
				level: 1,
				sex: 1,
				userId: "980818",
				address: "河南郑州",
				phone: "186xxxx9932",
				// token: "lbiceman-980818-186xxxx9932"
				token:
					"Bearer eyJraWQiOiJmZTg5NGY4Yi05NjQ1LTQ1NTMtYjlmNS1jOTVlY2IyMjNhNGQiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6IndzcCIsIm5iZiI6MTcxMDIwMjIwNSwiZXhwIjoxNzEwODI4NzI1LCJpYXQiOjE3MTAyMDIyMDV9.iw5vb86aIAqADC8ZvQVAxzZG4BMuk3qB_QyVqngC2y7y8CkKoSBQgWOT6UvU686d3jb_6HGYQw8RZE6hIwRLdSrlaCHmxNMGoA6j9l1HQ0nPUYwEUaN1idPv6ZzH_3_6P9OKD-Xh8acps_fo6EiL4l37bNUUHx2UfQNAWDo2d1dTr_pJQ32zq8_dFA71cHl9at96LT0e90-7kD0kD3svHgJz_nsSIMRNjQUcsMMeA-y8KJ_m5nr9oS7GafUF0V4LsqkDBzVFXzABJGfVmerGhzLPB-mRVfPHtyWayif3dq76u8nNqtY0W_d4S9Qb8lfuoWfMeH3tJKHSn-8_2QVvlA",
				...values
			};
			setUser(userData);
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
				subTitle="react后台管理"
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
