const Benchmark = require('benchmark')
const Beautifier = require('beautify-benchmark')
const clone = require('../index')

const suite = new Benchmark.Suite()

suite.add(
	'clone(undefined)',
	function() {
		clone(undefined)
	},
	{
		minSamples: 100
	}
)

suite.add(
	'clone(null)',
	function() {
		clone(null)
	},
	{
		minSamples: 100
	}
)

suite.add(
	"clone('')",
	function() {
		clone('')
	},
	{
		minSamples: 100
	}
)

suite.add(
	"encode('a')",
	function() {
		encoder.encode('a')
	},
	{
		minSamples: 100
	}
)

suite.add(
	'clone([])',
	function() {
		clone([1, 2, 3])
	},
	{
		minSamples: 100
	}
)

suite.add(
	'clone(Object[])',
	function() {
		clone([
			{
				id: '103',
				name: 'Peter'
			},
			{
				id: '214',
				name: 'Eve'
			}
		])
	},
	{
		minSamples: 100
	}
)

suite.add(
	'clone(Object)',
	function() {
		clone({
			id: 103,
			name: 'Ben',
			classes: ['Maths', 'Science', 'English language']
		})
	},
	{
		minSamples: 100
	}
)

suite
	.add(
		'clone(nested object)',
		function() {
			clone({
				id: 103,
				name: 'Ben',
				subjects: {
					groupDke: {
						science: 'B',
						maths: 'C'
					},
					groupOpe: {
						foo: 'bar'
					}
				}
			})
		},
		{
			minSamples: 100
		}
	)
	.on('cycle', function(event) {
		Beautifier.add(event.target)
	})
	.on('complete', () => {
		Beautifier.log()
	})
	.run({ async: false })
