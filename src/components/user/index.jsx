import React from "react";
import { useUserIndexQuery } from "../../features/user/api/userApi";
import { Space, Table, Tag } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";

const User = () => {
	const { data, isLoading } = useUserIndexQuery();
	const dataSource = data?.data?.map((user) => ({
		...user,
		key: user.id,
	}));

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

		// {
		// 	title: "Tags",
		// 	key: "tags",
		// 	dataIndex: "tags",
		// 	render: (_, { tags }) => (
		// 		<>
		// 			{tags.map((tag) => {
		// 				let color = tag.length > 5 ? "geekblue" : "green";
		// 				if (tag === "loser") {
		// 					color = "volcano";
		// 				}
		// 				return (
		// 					<Tag color={color} key={tag}>
		// 						{tag.toUpperCase()}
		// 					</Tag>
		// 				);
		// 			})}
		// 		</>
		// 	),
		// },
		// {
		// 	title: "Action",
		// 	key: "action",
		// 	render: (_, record) => (
		// 		<Space size='middle'>
		// 			<a>Invite {record.name}</a>
		// 			<a>Delete</a>
		// 		</Space>
		// 	),
		// },
	];

	const headerStyle = {
		backgroundColor: "#001529",
		color: "white",
		padding: "10px 20px",
		borderRadius: "4px",
		textAlign: "center",
		marginBottom: "20px",
		width: "100%",
	};

	return (
		<div>
			<div style={{ backgroundColor: "#f0f2f5", padding: "20px" }}>
				<h2 style={headerStyle}>User List</h2>
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
		</div>
	);
};

export default User;
