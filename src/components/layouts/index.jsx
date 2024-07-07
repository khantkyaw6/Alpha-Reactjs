import React, { useState } from "react";
import { Layout } from "antd";
import AppContent from "./content";
import AppHeader from "./header";
import AppSidebar from "./sidebar";

const AppLayout = () => {
	const [collapsed, setCollapsed] = useState(false);

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
