import { Drawer } from "antd";
import React from "react";
import UserForm from "./UserForm";

const UserDrawer = ({ onClose, open, update }) => {
	return (
		<Drawer
			destroyOnClose={true}
			title='User Form'
			onClose={onClose}
			open={open}
		>
			<UserForm onClose={onClose} update={update} />
		</Drawer>
	);
};

export default UserDrawer;
