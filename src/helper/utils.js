import {
	difference,
	isEmpty,
	isEqual,
	random,
	size,
	union,
	unionWith
} from 'lodash'

export const generateValidGrid = (jewels, row, col) => {
	if (isEmpty(jewels)) return []
	col = parseInt(col)
	row = parseInt(row)
	if (col <= 0 || row <= 0) throw Error('Invalid props')

	var grid = []
	for (var i = 0; i < row; i++) {
		var currentRow = []
		for (var j = 0; j < col; j++) {
			var banList = []

			if (
				currentRow &&
				currentRow[j - 2] &&
				currentRow[j - 1] &&
				currentRow[j - 2] === currentRow[j - 1]
			) {
				banList = union(banList, [currentRow[j - 1]])
			}

			if (
				grid[i - 2] &&
				grid[i - 1] &&
				grid[i - 2][j] &&
				grid[i - 1][j] &&
				grid[i - 2][j] === grid[i - 1][j]
			) {
				banList = union(banList, [grid[i - 1][j]])
			}

			const candidateJewels = difference(jewels, banList)
			currentRow.push(candidateJewels[random(size(candidateJewels) - 1)])
		}
		grid.push(currentRow)
	}

	return grid
}

export const findMatches = grid => {
	var matches = []

	if (isEmpty(grid)) return []

	for (var i = 0; i < size(grid); i++) {
		const currentRow = grid[i]

		for (var j = 0; j < size(currentRow); j++) {
			if (
				grid[i][j - 2] &&
				grid[i][j - 1] &&
				grid[i][j - 2] === grid[i][j - 1] &&
				grid[i][j - 1] === grid[i][j]
			) {
				matches = unionWith(
					matches,
					[
						{ row: i, col: j - 2 },
						{ row: i, col: j - 1 },
						{ row: i, col: j }
					],
					isEqual
				)
			}

			if (
				grid[i][j + 2] &&
				grid[i][j + 1] &&
				grid[i][j + 2] === grid[i][j + 1] &&
				grid[i][j + 1] === grid[i][j]
			) {
				matches = unionWith(
					matches,
					[
						{ row: i, col: j + 2 },
						{ row: i, col: j + 1 },
						{ row: i, col: j }
					],
					isEqual
				)
			}

			if (
				grid[i - 2] &&
				grid[i - 2][j] &&
				grid[i - 1][j] &&
				grid[i - 2][j] === grid[i - 1][j] &&
				grid[i - 1][j] === grid[i][j]
			) {
				matches = unionWith(
					matches,
					[
						{ row: i - 2, col: j },
						{ row: i - 1, col: j },
						{ row: i, col: j }
					],
					isEqual
				)
			}

			if (
				grid[i + 2] &&
				grid[i + 2][j] &&
				grid[i + 1][j] &&
				grid[i + 2][j] === grid[i + 1][j] &&
				grid[i + 1][j] === grid[i][j]
			) {
				matches = unionWith(
					matches,
					[
						{ row: i + 2, col: j },
						{ row: i + 1, col: j },
						{ row: i, col: j }
					],
					isEqual
				)
			}

			if (
				grid[i][j - 1] &&
				grid[i][j + 1] &&
				grid[i][j - 1] === grid[i][j] &&
				grid[i][j] === grid[i][j + 1]
			) {
				matches = unionWith(
					matches,
					[
						{ row: i, col: j - 1 },
						{ row: i, col: j },
						{ row: i, col: j + 1 }
					],
					isEqual
				)
			}

			if (
				grid[i - 1] &&
				grid[i + 1] &&
				grid[i - 1][j] &&
				grid[i + 1][j] &&
				grid[i - 1][j] === grid[i][j] &&
				grid[i][j] === grid[i + 1][j]
			) {
				matches = unionWith(
					matches,
					[
						{ row: i - 1, col: j },
						{ row: i, col: j },
						{ row: i + 1, col: j }
					],
					isEqual
				)
			}
		}
	}

	return matches
}

export const generateRawGrid = (jewels, col, row) => {
	if (isEmpty(jewels)) return []
	col = parseInt(col)
	row = parseInt(row)
	if (col <= 0 || row <= 0) throw Error('Invalid props')

	var grid = []
	for (var i = 0; i < row; i++) {
		var eachRow = []
		for (var j = 0; j < col; j++) {
			eachRow.push(jewels[random(size(jewels) - 1)])
		}
		grid.push(eachRow)
	}

	return grid
}
