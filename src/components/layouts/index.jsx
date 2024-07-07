import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import AppContent from "./content";
import AppHeader from "./header";
import AppSidebar from "./sidebar";
import { useNavigate } from "react-router-dom";

const AppLayout = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [token, setToken] = useState(false);
	const navigate = useNavigate();

	return (
		<Layout
		// style={{ height: "100vh" }}
		>
			<AppSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
			<Layout>
				<AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
				<AppContent />
			</Layout>
		</Layout>
	);
};

export default AppLayout;
