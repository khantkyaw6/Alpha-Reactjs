import { Drawer } from "antd";
import React from "react";
import UserForm from "./UserForm";

const UserDrawer = ({ onClose, open }) => {
	return (
		<Drawer
			destroyOnClose={true}
			title='User Form'
			onClose={onClose}
			open={open}
		>
			<UserForm onClose={onClose} />
		</Drawer>
	);
};

export default UserDrawer;
