import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';

import { updateAvatar } from '../../actions/settingsAction';

import getImageSize from '../../utils/getImageSize';

import NormalBtn from '../../shared/NormalBtn/NormalBtn';
import Input from '../../shared/Input/Input';

const Container = styled.div`
	width: calc(100% - 200px);
	height: 100vh;
	margin-left: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	font-family: ${props => props.theme.mainFont};
`

const PageTitle = styled.p`
	position: absolute;
	top: 20px;
	text-align: center;
	font-size: 40px;
	color: ${props => props.theme.mainFontColor};
	font-family: ${props => props.theme.mainFont};
	text-transform: uppercase;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
`

const Wrapper = styled.div`
	width: 600px;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

const OptionTitle = styled.div`
	font-size: 32px;
	color: ${props => props.theme.mainFontColor};
	width: 100%;
	margin-top: 30px;

	&:first-of-type {
		margin-top: 0;
	}

	&::after {
		content: "";
		width: 100%;
		height: 2px;
		background-color: #ffffff;
		display: block;
		margin-top: 2px;
		margin-bottom: 15px;
	}
`

const AvatarWrapper = styled.div`
	display: flex;
	margin-bottom: 15px;
`

const Avatar = styled.img`
	width: 112px;
	height: 112px;
	border-radius: 50%;
`

const AvatarFileInput = styled.input`
	align-self: flex-end;
	width: 200px;
	cursor: pointer;

	&::before {
		content: "Maximum resolution: 112x112 (px)";
		color: ${props => props.theme.infoColor};
		font-size: 12px;
	}
`

const StyledInput = styled(Input)`
	margin: 10px 0px;

	input {
		height: 40px;
	}
`

const Settings = ({profile, firestore, settingsState, updateAvatar}) => {
	const [avatarFile, setAvatarFile] = useState(null);
	const [avatarLink, setAvatarLink] = useState(null);

	const handleAvatarFileInput = async e => {
		const acceptedImageTypes = ['image/jpeg', 'image/png'];
		const { files } = e.target;

		if (files[0] && acceptedImageTypes.includes(files[0].type)) {
			const size = await getImageSize(files[0]);
			if (size && size[0] <= 112 && size[1] <= 112) {
				setAvatarLink(window.URL.createObjectURL(files[0]));
				setAvatarFile(files[0]);
			} else {
				alert('The image is too big! Maximum resolution is: 112x112 (px)');
			}
		}
	}

	const handleAvatarUpdate = () => {
		if (!settingsState && avatarFile) {
			updateAvatar(firestore, avatarFile);
		}
	}

	return (
		<Container>
			<PageTitle>Settings</PageTitle>
			<Wrapper>
				<OptionTitle>Avatar</OptionTitle>
				<AvatarWrapper>
					<Avatar alt="" src={profile.isLoaded ? avatarLink ? avatarLink : profile.avatar : ''}/>
					<AvatarFileInput onChange={handleAvatarFileInput} type="file" accept="image/*"/>
				</AvatarWrapper>
				<NormalBtn onClick={handleAvatarUpdate}>Save</NormalBtn>
				<OptionTitle>Change password</OptionTitle>
				<StyledInput label="Current password:" placeholder="Current password..." type="password"/>
				<StyledInput label="New password:" placeholder="New password..." type="password"/>
				<NormalBtn>Save</NormalBtn>
				<OptionTitle>Other</OptionTitle>
				<NormalBtn bordercolor="#f44336">DELETE ACCOUNT</NormalBtn>
			</Wrapper>
		</Container>
	);
};

const mapStateToProps = state => {
	return {
		profile: state.firebase.profile,
		settingsState: state.settingsReducer.settingsState
	}
}

export default connect(mapStateToProps, { updateAvatar })(withFirestore(Settings));