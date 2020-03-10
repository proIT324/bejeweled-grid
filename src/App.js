import React, { useEffect, useState } from 'react'
import './App.css'

import { Button, Row } from './components'

import { JEWELS } from './constants/jewel'
import { generateValidGrid } from './helper/utils'

function App() {
	const [grid, setGrid] = useState([])

	useEffect(() => {
		setGrid(generateValidGrid(JEWELS, 8, 8))
	}, [])

	const onReloadClick = () => {
		setGrid(generateValidGrid(JEWELS, 8, 8))
	}

	return (
		<div className="App">
			{grid.map((row, index) => (
				<Row key={index} index={index} items={row} />
			))}
			<Button title="RELOAD" onClick={onReloadClick} />
		</div>
	)
}

export default App
