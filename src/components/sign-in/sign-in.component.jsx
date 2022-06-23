import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";

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
				<span>Sign in with your email and password</span>
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

					<input
						handleChange={this.handleChange}
						type="submit"
						value="Submit Form"
					/>
				</form>
			</div>
		);
	}
}
export default SignIn;
