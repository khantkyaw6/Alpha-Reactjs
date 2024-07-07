import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Flex, Layout, theme } from "antd";

import "./index.css";

const { Header } = Layout;

// Define the AppHeader functional component
const AppHeader = ({ collapsed, setCollapsed }) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Header
			style={{
				padding: 0,
				width: "100%",
				display: "flex",
				background: colorBgContainer,
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<Flex align='center'>
				<Button
					type='text'
					icon={
						collapsed ? (
							<MenuUnfoldOutlined />
						) : (
							<MenuFoldOutlined />
						)
					}
					onClick={() => setCollapsed(!collapsed)}
					style={{
						fontSize: "16px",
						width: 64,
						height: "100%",
						borderRadius: 0,
					}}
				/>
			</Flex>
		</Header>
	);
};

export default AppHeader;
