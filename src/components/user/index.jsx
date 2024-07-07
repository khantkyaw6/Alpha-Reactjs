import React, { useState } from "react";
import {
	useUserDeleteMutation,
	useUserIndexQuery,
} from "../../features/user/api/userApi";
import { Button, Space, Table, Drawer, Popconfirm } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { styles } from "./style";
import UserDrawer from "./components/UserDrawer";
import { toast } from "sonner";

const User = () => {
	const [userDelete] = useUserDeleteMutation();
	const { data, isLoading } = useUserIndexQuery();
	const [open, setOpen] = useState(false);
	const [update, setUpdate] = useState(null);
	const dataSource = data?.data?.map((user) => ({
		...user,
		key: user.id,
	}));

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
		setUpdate(null); // Reset update state
	};

	const editHandler = (data) => {
		setUpdate(data);
		showDrawer();
	};

	const deleteHandler = async (id) => {
		console.log("In here", id);
		try {
			const result = await userDelete(id);
			console.log(result);
			if (result.data.isSuccess) {
				toast.success(result.data.message);
			}
		} catch (error) {
			console.log(error);
			toast.error(error.data.message);
		}
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
					<Button
						type='link'
						icon={<EditOutlined />}
						onClick={() => editHandler(record)}
					/>
					<Popconfirm
						title='Are you sure to delete this user?'
						onConfirm={() => deleteHandler(record.id)}
						okText='Yes'
						cancelText='No'
					>
						<Button type='link' icon={<DeleteOutlined />} />
					</Popconfirm>
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
			<UserDrawer onClose={onClose} open={open} update={update} />
		</div>
	);
};

export default User;
