import {
	UserOutlined,
	LockOutlined,
	PhoneOutlined,
	MailOutlined,
	ManOutlined,
	WomanOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Checkbox, Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../../features/authentication/api/authApi"; // Assuming you have this setup
import { toast } from "sonner";
import { loginLayoutStyle } from "./style";

const { Option } = Select;

const Register = () => {
	const navigate = useNavigate();
	const [register, { isLoading }] = useRegisterMutation();

	const onFinish = async (values) => {
		console.log(values);

		register(values)
			.unwrap()
			.then(async (res) => {
				toast.success(res.message);
				navigate("/user");
			})
			.catch((err) => {
				toast.error(err.data.message);
			});
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
		<div style={loginLayoutStyle.form}>
			<Form
				name='normal_register'
				className='register-form'
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
			>
				<div style={loginLayoutStyle.iconContainer}>
					<FontAwesomeIcon
						icon={faUserPlus}
						style={loginLayoutStyle.icon}
					/>
				</div>
				<Form.Item
					name='name'
					rules={[
						{
							required: true,
							message: "Please enter your Name!",
						},
					]}
				>
					<Input
						prefix={
							<UserOutlined className='site-form-item-icon' />
						}
						placeholder='Name'
					/>
				</Form.Item>
				<Form.Item
					name='email'
					rules={[
						{
							required: true,
							message: "Please enter your Email!",
						},
					]}
				>
					<Input
						prefix={
							<MailOutlined className='site-form-item-icon' />
						}
						placeholder='Email'
					/>
				</Form.Item>
				<Form.Item
					name='phone'
					rules={[
						{
							required: true,
							message: "Please enter your Phone number!",
						},
						{
							validator: phoneValidator,
						},
					]}
				>
					<Input
						prefix={
							<PhoneOutlined className='site-form-item-icon' />
						}
						placeholder='Phone'
					/>
				</Form.Item>
				<Form.Item
					name='gender'
					rules={[
						{
							required: true,
							message: "Please select your Gender!",
						},
					]}
				>
					<Select placeholder='Select your gender'>
						<Option value='male'>
							<ManOutlined /> Male
						</Option>
						<Option value='female'>
							<WomanOutlined /> Female
						</Option>
					</Select>
				</Form.Item>
				<Form.Item
					name='password'
					rules={[
						{
							required: true,
							message: "Please enter your Password!",
						},
					]}
				>
					<Input.Password
						prefix={
							<LockOutlined className='site-form-item-icon' />
						}
						type='password'
						placeholder='Password'
					/>
				</Form.Item>

				<Form.Item>
					<Button
						block
						type='primary'
						htmlType='submit'
						className='register-form-button'
						// disabled={isLoading}
					>
						Register
					</Button>

					<div style={loginLayoutStyle.signupLink}>
						<span
							style={{
								padding: "0 10px",
							}}
						>
							Or
						</span>
						<a href='/login'>Login Now!</a>
					</div>
				</Form.Item>
			</Form>
		</div>
	);
};
export default Register;
