import React, { useState } from "react";
import { useUserIndexQuery } from "../../features/user/api/userApi";
import { Button, Space, Table, Drawer } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
import { styles } from "./style";
import UserDrawer from "./components/UserDrawer";

const User = () => {
	const { data, isLoading } = useUserIndexQuery();
	const [open, setOpen] = useState(false);
	const dataSource = data?.data?.map((user) => ({
		...user,
		key: user.id,
	}));

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			render: (text) => <h5>{text.toUpperCase()}</h5>,
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Phone",
			dataIndex: "phone",
			key: "phone",
		},
		{
			title: "Gender",
			dataIndex: "gender",
			key: "gender",
			render: (gender) => {
				return gender === "male" ? (
					<FontAwesomeIcon icon={faMars} />
				) : (
					<FontAwesomeIcon icon={faVenus} />
				);
			},
			align: "center",
			onCell: () => ({
				style: { textAlign: "center" },
			}),
		},
		{
			title: "Action",
			key: "action",
			render: (_, record) => (
				<Space size='middle'>
					<a>Invite {record.name}</a>
					<a>Delete</a>
				</Space>
			),
		},
	];

	return (
		<div>
			<div style={{ backgroundColor: "#f0f2f5", padding: "20px" }}>
				<div style={styles.headerStyle}>
					<h2 style={{ margin: 0 }}>User List</h2>
					<Button type='primary' onClick={showDrawer}>
						Create
					</Button>
				</div>
				<Table
					bordered
					columns={columns}
					dataSource={dataSource}
					loading={isLoading}
					style={{
						width: "100%",
						backgroundColor: "white",
					}}
				/>
			</div>
			<UserDrawer onClose={onClose} open={open} />
		</div>
	);
};

export default User;
