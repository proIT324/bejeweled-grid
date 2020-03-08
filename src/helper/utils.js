import { difference, indexOf, isEmpty, random, size, union } from 'lodash'

export const findMatches = grid => {
	var matches = []
	var groups = []

	for (var i = 0; i < grid.length; i++) {
		var tempArr = grid[i]
		groups = []

		for (var j = 0; j < tempArr.length; j++) {
			if (j < tempArr.length - 2) {
				if (grid[i][j] && grid[i][j + 1] && grid[i][j + 2]) {
					if (
						grid[i][j] === grid[i][j + 1] &&
						grid[i][j + 1] === grid[i][j + 2]
					) {
						if (!isEmpty(groups) && indexOf(groups, grid[i][j]) === -1) {
							matches.push(groups)
							groups = []
						}

						indexOf(groups, grid[i][j]) === -1 &&
							groups.push({ row: i, col: j })

						indexOf(groups, grid[i][j + 1]) === -1 &&
							groups.push({ row: i, col: j + 1 })

						indexOf(groups, grid[i][j + 2]) === -1 &&
							groups.push({ row: i, col: j + 2 })
					}
				}
			}
		}

		!isEmpty(groups) && matches.push(groups)
	}

	for (j = 0; j < grid.length; j++) {
		tempArr = grid[j]
		groups = []

		for (i = 0; i < tempArr.length; i++) {
			if (i < tempArr.length - 2) {
				if (grid[i][j] && grid[i + 1][j] && grid[i + 2][j]) {
					if (
						grid[i][j] === grid[i + 1][j] &&
						grid[i + 1][j] === grid[i + 2][j]
					) {
						if (!isEmpty(groups) && indexOf(groups, grid[i][j]) === -1) {
							matches.push(groups)
							groups = []
						}

						indexOf(groups, grid[i][j]) === -1 &&
							groups.push({ row: i, col: j })

						indexOf(groups, grid[i + 1][j]) === -1 &&
							groups.push({ row: i + 1, col: j })

						indexOf(groups, grid[i + 2][j]) === -1 &&
							groups.push({ row: i + 2, col: j })
					}
				}
			}
		}
		!isEmpty(groups) && matches.push(groups)
	}

	var result = []

	for (i = 0; i < matches.length; i++) {
		const row = matches[i]
		result = union(result, row)
	}

	return result
}

export const generateGrid = (prototypes, col, row) => {
	if (isEmpty(prototypes)) return []
	col = parseInt(col)
	row = parseInt(row)
	if (col <= 0 || row <= 0) throw Error('Invalid props')

	var grid = []
	for (var i = 0; i < row; i++) {
		var eachRow = []
		for (var j = 0; j < col; j++) {
			eachRow.push(prototypes[random(size(prototypes) - 1)])
		}
		grid.push(eachRow)
	}

	const matches = findMatches(grid)

	if (isEmpty(matches)) return grid

	for (i = 0; i < matches.length; i++) {
		var neighbors = []

		matches[i].col > 0 &&
			neighbors.push({ row: matches[i].row, col: matches[i].col - 1 })
		matches[i].col < col - 1 &&
			neighbors.push({ row: matches[i].row, col: matches[i].col + 1 })

		matches[i].row > 0 &&
			neighbors.push({ row: matches[i].row - 1, col: matches[i].col })
		matches[i].row < row - 1 &&
			neighbors.push({ row: matches[i].row + 1, col: matches[i].col })

		const candidateJewels = difference(
			prototypes,
			neighbors.map(neighbor => grid[neighbor.row][neighbor.col])
		)

		if (!isEmpty(candidateJewels)) {
			grid[matches[i].row][matches[i].col] =
				candidateJewels[random(size(candidateJewels) - 1)]
		}
	}

	return grid
}
