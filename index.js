
module.exports = {
	create: require('./global-cli/create'),
	pack: require('./global-cli/pack'),
	serve: require('./global-cli/serve'),
	clean: require('./global-cli/clean'),
	lint: require('./global-cli/lint'),
	test: require('./global-cli/test'),
	transpile: require('./global-cli/transpile')
}