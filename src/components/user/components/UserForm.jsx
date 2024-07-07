import {
	LockOutlined,
	MailOutlined,
	ManOutlined,
	PhoneOutlined,
	UserOutlined,
	WomanOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import {
	useUserStoreMutation,
	useUserUpdateMutation,
} from "../../../features/user/api/userApi";
import { toast } from "sonner";

const UserForm = ({ onClose, update }) => {
	const [form] = Form.useForm();
	const [userStore, { isLoading: isCreateLoading }] = useUserStoreMutation();
	const [userUpdate, { isLoading: isUpdateLoading }] =
		useUserUpdateMutation();

	useEffect(() => {
		if (update) {
			form.setFieldsValue({
				name: update.name,
				email: update.email,
				phone: update.phone,
				gender: update.gender,
			});
		} else {
			form.resetFields();
		}
	}, [update, form]);

	const onFinish = async (values) => {
		if (update) {
			userUpdate({ data: values, id: update.id })
				.unwrap()
				.then(async (res) => {
					if (isSuccess) {
						toast.success(res.message);
					}
				})
				.catch((err) => {
					toast.error(err.data.message);
				});
		} else {
			userStore(values)
				.unwrap()
				.then(async (res) => {
					console.log(res);
					if (res.isSuccess) {
						toast.success(res.message);
					}
				})
				.catch((err) => {
					console.log(err);
					toast.error(err.data.message);
				});
		}

		onClose();
	};

	const phoneValidator = (_, value) => {
		const regex = /^[0-9]+$/;
		if (!value || regex.test(value)) {
			return Promise.resolve();
		}
		return Promise.reject(
			"Please enter a valid phone number (numbers only)."
		);
	};

	return (
		<Form
			form={form}
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
					{
						validator: phoneValidator,
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
					loading={update ? isUpdateLoading : isCreateLoading}
					disabled={isUpdateLoading || isCreateLoading}
				>
					{update ? "Update" : "Create"}
				</Button>
			</Form.Item>
		</Form>
	);
};

export default UserForm;
