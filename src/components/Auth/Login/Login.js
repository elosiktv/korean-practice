import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { logIn, clearAuthState } from '../../../actions/authAction';

import PageTitle from '../../../shared/PageTitle/PageTitle';
import Input from '../../../shared/Input/Input';
import AuthBtn from '../../../shared/AuthBtn/AuthBtn';

const Container = styled.form`
	width: calc(100% - 200px);
	height: 100vh;
	margin-left: 200px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;

	@media (max-width: 600px) {
		width: 100%;
		margin: 0;
	}

	@media (max-height: 370px) {
		height: 350px;
	}
`

const StyledInput = styled(Input)`
	margin: 10px 0px;
`

const ErrorMessage = styled.p`
	font-family: ${props => props.theme.mainFont};
	color: #ff0000;
	font-size: 16px;
	width: 250px;
	margin-top: -8px;
	margin-bottom: 5px;
`

const Login = ({logIn, clearAuthState, authError, authStart, authSuccess}) => {
	const [emailInput, setEmailInput] = useState(null);
	const [passwordInput, setPasswordInput] = useState(null);

	useEffect(() => {
		return () => {
			clearAuthState();
		}
	}, [clearAuthState]);

	const handleLogInButton = e => {
		e.preventDefault();

		if (authStart === false) {
			logIn(emailInput, passwordInput);
		}
	}

	if (authSuccess === true) {
		return <Redirect to="/" />
	}

	return (
		<Container>
			<Helmet>
				<title>Login - Korean practice</title>
			</Helmet>
			<PageTitle>Log in</PageTitle>
			<StyledInput onChange={(value) => setEmailInput(value)} label="Email:" placeholder="Email..."/>
			<ErrorMessage>{authError.email}</ErrorMessage>
			<StyledInput onChange={(value) => setPasswordInput(value)} label="Password:" placeholder="Password..." type="password"/>
			<ErrorMessage>{authError.password}</ErrorMessage>
			<AuthBtn onClick={handleLogInButton}>Log in</AuthBtn>
		</Container>
	);
};

const mapStateToProps = state => {
	return {
		authError: state.authReducer.authError,
		authStart: state.authReducer.authStart,
		authSuccess: state.authReducer.authSuccess
	}
}

export default connect(mapStateToProps, { logIn, clearAuthState })(Login);