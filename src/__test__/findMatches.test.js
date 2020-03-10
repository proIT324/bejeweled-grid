import { findMatches } from '../helper/utils'
import { xorWith, isEqual } from 'lodash'

const grid = [
	[
		'#3192F1',
		'#3192F1',
		'#F9A620',
		'#5630D8',
		'#FFD449',
		'#E23822',
		'#F9A620',
		'#FFD449'
	],
	[
		'#5630D8',
		'#3192F1',
		'#5630D8',
		'#3192F1',
		'#FFD449',
		'#FFD449',
		'#F9A620',
		'#E23822'
	],
	[
		'#3192F1',
		'#E3E3E3',
		'#FFD449',
		'#144B14',
		'#F9A620',
		'#E23822',
		'#E23822',
		'#E23822'
	],
	[
		'#144B14',
		'#E23822',
		'#E23822',
		'#E3E3E3',
		'#E23822',
		'#FFD449',
		'#FFD449',
		'#5630D8'
	],
	[
		'#FFD449',
		'#FFD449',
		'#E3E3E3',
		'#E3E3E3',
		'#E3E3E3',
		'#FFD449',
		'#FFD449',
		'#5630D8'
	],
	[
		'#144B14',
		'#E23822',
		'#E23822',
		'#E23822',
		'#144B14',
		'#5630D8',
		'#FFD449',
		'#3192F1'
	],
	[
		'#F9A620',
		'#5630D8',
		'#3192F1',
		'#144B14',
		'#FFD449',
		'#E3E3E3',
		'#FFD449',
		'#5630D8'
	],
	[
		'#3192F1',
		'#E23822',
		'#FFD449',
		'#F9A620',
		'#144B14',
		'#F9A620',
		'#3192F1',
		'#5630D8'
	]
]

const matches = [
	{ row: 2, col: 5 },
	{ row: 2, col: 6 },
	{ row: 2, col: 7 },
	{ row: 3, col: 6 },
	{ row: 4, col: 2 },
	{ row: 4, col: 3 },
	{ row: 4, col: 4 },
	{ row: 4, col: 6 },
	{ row: 5, col: 1 },
	{ row: 5, col: 2 },
	{ row: 5, col: 3 },
	{ row: 5, col: 6 },
	{ row: 6, col: 6 }
]

test('findMatches', () => {
	expect(xorWith(findMatches(grid), matches, isEqual)).toStrictEqual([])
})
