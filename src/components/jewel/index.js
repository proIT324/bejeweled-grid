import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledContainer = styled.div`
	height: 72px;
	width: 72px;
	border-radius: 8px;
	margin: 8px;
	background-color: ${props => props.type};
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	cursor: default;
`

StyledContainer.propTypes = {
	type: PropTypes.string.isRequired
}

const Jewel = ({ type }) => {
	return <StyledContainer type={type} />
}

Jewel.propTypes = {
	type: PropTypes.string.isRequired
}

export default Jewel
