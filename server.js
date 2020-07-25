const fastify = require('fastify')({
    logger: true
})
const pageDetailsController = require('./page-details-controller')
const config = require('./config')

// Declare a route
fastify.get('/', pageDetailsController.get)

//Read port from env variable or assign a default port
const port = config.APP_PORT || 3000

// Run the server!
fastify.listen(port, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})