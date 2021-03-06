import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { signOut } from '../../actions/authAction';

import Logo from '../../shared/Logo/Logo';
import AuthBtn from '../../shared/AuthBtn/AuthBtn';

const Container = styled.div`
	width: calc(100% - 200px);
	margin-left: 200px;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media (max-width: 600px) {
		width: 100%;
		margin: 0;
	}

	@media (max-height: 425px) {
		height: 360px;
		margin-top: 20px;
	}
`

const HelloGreeting = styled.p`
	font-size: 58px;
	color: #ffff00;
	margin-top: 40px;

	@media (max-width: 350px) {
		font-size: 52px;
	}
`

const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: ${({logged}) => logged ? 'center' : 'space-between'};
	width: 290px;
	margin-top: 10px;
`

const Info = styled.p`
	color: ${props => props.theme.infoColor};
	font-size: 16px;
	font-family: ${props => props.theme.mainFont};
	text-align: center;
	margin-top: 20px;
	margin-bottom: 30px;
	line-height: 20px;
`

const Heart = styled(FontAwesome)`
	font-size: 13px;
	color: #ff0000;
`

const LinkA = styled.a`
	color: ${props => props.theme.infoColor};
`

const StyledLink = styled(Link)`
	color: ${props => props.theme.infoColor};	
`

const Hello = ({auth, signOut}) => {
	return (
		<Container>
			<Helmet>
				<title>Korean practice</title>
			</Helmet>
			<Logo size="large" />
			<HelloGreeting>안녕하세요!</HelloGreeting>
			<ButtonsWrapper logged={auth.uid ? 1 : 0}>
				{
					auth.uid ? (
						<AuthBtn onClick={signOut}>Log out</AuthBtn>
					) : (
						<>
							<AuthBtn href="/login">Log in</AuthBtn>
							<AuthBtn href="/register">Sign up</AuthBtn>
						</>
					)
				}
			</ButtonsWrapper>
			<Info>
				Made with <Heart name="heart"/> by <LinkA href="https://github.com/elosiktv">Daniel Dąbrowski</LinkA> <br />
				Based on <LinkA href="https://www.howtostudykorean.com/">howtostudykorean.com</LinkA> <br /><br />
				<StyledLink to="/faq">FAQ</StyledLink>
			</Info>
		</Container>
	);
};

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth
	}
}

export default connect(mapStateToProps, { signOut })(Hello);