import {
	LockOutlined,
	MailOutlined,
	ManOutlined,
	PhoneOutlined,
	UserOutlined,
	WomanOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import React from "react";
import { useUserStoreMutation } from "../../../features/user/api/userApi";

const UserForm = ({ onClose }) => {
	const [form] = Form.useForm();
	const [userStore, { isLoading }] = useUserStoreMutation();
	const onFinish = async (values) => {
		console.log(values);

		userStore(values)
			.unwrap()
			.then(async (res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});

		onClose();
	};
	return (
		<Form
			name='normal_register'
			className='register-form'
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
		>
			<Form.Item
				name='name'
				rules={[
					{
						required: true,
						message: "Please enter user Name!",
					},
				]}
			>
				<Input
					prefix={<UserOutlined className='site-form-item-icon' />}
					placeholder='Name'
				/>
			</Form.Item>
			<Form.Item
				name='email'
				rules={[
					{
						required: true,
						message: "Please enter user Email!",
					},
				]}
			>
				<Input
					prefix={<MailOutlined className='site-form-item-icon' />}
					placeholder='Email'
				/>
			</Form.Item>
			<Form.Item
				name='phone'
				rules={[
					{
						required: true,
						message: "Please enter user Phone number!",
					},
				]}
			>
				<Input
					prefix={<PhoneOutlined className='site-form-item-icon' />}
					placeholder='Phone'
				/>
			</Form.Item>
			<Form.Item
				name='gender'
				rules={[
					{
						required: true,
						message: "Please select user Gender!",
					},
				]}
			>
				<Select placeholder='Select user gender'>
					<Option value='male'>
						<ManOutlined /> Male
					</Option>
					<Option value='female'>
						<WomanOutlined /> Female
					</Option>
				</Select>
			</Form.Item>

			<Form.Item>
				<Button
					block
					type='primary'
					htmlType='submit'
					className='register-form-button'
					// disabled={isLoading}
				>
					Create
				</Button>
			</Form.Item>
		</Form>
	);
};

export default UserForm;
