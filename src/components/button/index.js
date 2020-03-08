import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 48px;
	width: fit-content;
	padding: 0 24px;
	border-radius: 8px;
	background-color: var(--primary-button-background-color);
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	cursor: default;
`

StyledContainer.propTypes = {
	onClick: PropTypes.func.isRequired
}

const StyledSpan = styled.span`
	color: var(--white);
	font-family: sans-serif;
	font-size: 12px;
	font-weight: bold;
	cursor: default;
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Old versions of Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none;
`

const Button = ({ title, onClick }) => {
	return (
		<StyledContainer onClick={onClick}>
			<StyledSpan>{title}</StyledSpan>
		</StyledContainer>
	)
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}

export default Button
