import { Col, Layout, Row } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const AppContent = () => {
	return (
		<Content
			style={{
				margin: "0 16px",
				transition: "margin-left 0.2s", // Add a transition for margin-left
			}}
		>
			{/* <AppBreadcrumb /> */}

			{/* Container for the main content */}
			<Row
				style={{
					marginBottom: 20,
				}}
			>
				<Col span={24}>
					<Outlet /> {/* Render the main content */}
				</Col>
			</Row>
		</Content>
	);
};

export default AppContent;
