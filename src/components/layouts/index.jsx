import React, { useState } from "react";
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Col, Layout, Menu, Row, theme } from "antd";
import { Outlet } from "react-router-dom";
import AppContent from "./content";
import AppHeader from "./header";
import AppSidebar from "./sidebar";

const { Header, Sider, Content } = Layout;

const AppLayout = () => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	return (
		<Layout style={{ height: "100vh" }}>
			<AppSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
			<Layout>
				<AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
				<AppContent />
			</Layout>
		</Layout>
	);
};

export default AppLayout;
