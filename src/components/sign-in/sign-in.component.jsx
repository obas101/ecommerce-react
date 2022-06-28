import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ email: "", password: "" });
	};

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span className="title">Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						handleChange={this.handleChange}
						value={this.state.email}
						type="email"
						label="Email"
						required
					/>
					<FormInput
						handleChange={this.handleChange}
						name="password"
						type="password"
						label="Password"
						value={this.state.password}
						required
					/>

					<CustomButton handleChange={this.handleChange} type="submit">
						Sign In
					</CustomButton>
					<CustomButton onClick={signInWithGoogle}>
						Sign In With Google
					</CustomButton>
				</form>
			</div>
		);
	}
}
export default SignIn;
