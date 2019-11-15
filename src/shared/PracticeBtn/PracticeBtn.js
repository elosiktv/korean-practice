import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ContainerLink = styled(Link)`
	width: ${({small}) => small ? '200px' : '288px'};
	height: ${({small}) => small ? '200px' : '313px'};
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	font-size: 36px;
	color: #fff;
	font-family: ${props => props.theme.mainFont};
	border: 3px solid ${({bordercolor}) => bordercolor && bordercolor};
`

const ContainerBtn = styled.button`
	width: ${({small}) => small ? '200px' : '288px'};
	height: ${({small}) => small ? '200px' : '313px'};
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	font-size: 36px;
	color: #fff;
	font-family: ${props => props.theme.mainFont};
	border: 3px solid ${({bordercolor}) => bordercolor && bordercolor};
	background: transparent;
`

const PracticeBtn = ({bordercolor, children, to, onClick, className, small}) => {
	if (onClick) {
		return <ContainerBtn small={small ? 1 : 0} bordercolor={bordercolor} className={className} onClick={onClick}>{children}</ContainerBtn>
	} else {
		return 	<ContainerLink small={small ? 1 : 0} to={to} bordercolor={bordercolor} className={className}>{children}</ContainerLink>
	}
};

PracticeBtn.defaultProps = {
	bordercolor: "#00bcd4"
}

PracticeBtn.propTypes = {
	bordercolor: PropTypes.string,
	children: PropTypes.string.isRequired,
	to: PropTypes.string
}

export default PracticeBtn;