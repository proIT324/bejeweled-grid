import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Jewel } from '..'

const StyledContainer = styled.div`
	display: flex;
	flex-direction: row;
`

const StyledCellContainer = styled.div`
	background-color: ${props =>
		props.darkMode
			? 'var(--dark-cell-background-color)'
			: 'var(--light-cell-background-color)'};
`

StyledCellContainer.propTypes = {
	darkMode: PropTypes.bool.isRequired
}

const isEven = num => num % 2 === 0

const Row = ({ index, items }) => {
	return (
		<StyledContainer>
			{items.map((item, _index) => (
				<StyledCellContainer
					key={_index}
					darkMode={
						(isEven(index) && isEven(_index)) ||
						(!isEven(index) && !isEven(_index))
					}
				>
					<Jewel type={item} />
				</StyledCellContainer>
			))}
		</StyledContainer>
	)
}

Row.propTypes = {
	index: PropTypes.number.isRequired,
	items: PropTypes.array.isRequired
}

export default Row
