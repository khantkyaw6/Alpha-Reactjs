import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Button, Checkbox, Form, Input, message } from "antd";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loginLayoutStyle } from "./style";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../features/authentication/api/authApi";
import { toast } from "sonner";

const Login = () => {
	const navigate = useNavigate();
	const [login, { isLoading }] = useLoginMutation();

	const onFinish = async (values) => {
		console.log(values);

		login(values)
			.unwrap()
			.then(async (res) => {
				console.log(res);
				toast.success(res.message);
				navigate("/user");
			})
			.catch((err) => {
				console.log(err);
				toast.error(err.data.message);
			});
	};

	return (
		<div style={loginLayoutStyle.form}>
			<Form
				name='normal_login'
				className='login-form'
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
			>
				<div style={loginLayoutStyle.iconContainer}>
					<FontAwesomeIcon
						icon={faLock}
						style={loginLayoutStyle.icon}
					/>
				</div>
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
							<UserOutlined className='site-form-item-icon' />
						}
						placeholder='Email'
					/>
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
					<Form.Item name='remember' valuePropName='checked' noStyle>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<a className='login-form-forgot' href=''>
						Forgot Password
					</a>
				</Form.Item>
				<Form.Item>
					<Button
						block
						type='primary'
						htmlType='submit'
						className='login-form-button'
						// disabled={isLoading}
					>
						Log in
					</Button>

					<div style={loginLayoutStyle.signupLink}>
						<span
							style={{
								padding: "0 10px",
							}}
						>
							Or
						</span>
						<a href=''>Register Now!</a>
					</div>
				</Form.Item>
			</Form>
		</div>
	);
};
export default Login;
