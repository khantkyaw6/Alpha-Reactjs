import { useState } from "react";
import { Layout, Menu, theme } from "antd";
import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const navItems = [
	{
		key: "user",
		icon: <UserOutlined />,
		label: "User",
	},
	{
		key: "video",
		icon: <VideoCameraOutlined />,
		label: "Video",
	},
	{
		key: "upload",
		icon: <UploadOutlined />,
		label: "Upload",
	},
];

// Define the AppSidebar functional component
const AppSidebar = ({ setCollapsed, collapsed }) => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	const navigate = useNavigate();

	const handleItemClick = (key) => {
		navigate(key);
	};

	return (
		<Sider
			trigger={null}
			collapsible
			collapsed={collapsed}
			style={{ height: "100vh" }}
		>
			<Menu
				theme='dark'
				mode='inline'
				defaultSelectedKeys={["1"]}
				onClick={({ key }) => handleItemClick(key)}
				items={navItems}
			/>
		</Sider>
	);
};

export default AppSidebar;
