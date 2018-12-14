const health = require('./health')
const bpk = require('./bpk')

module.exports = (app) => {
    app.use('/health', health)
    app.use('/bpk', bpk)
}
