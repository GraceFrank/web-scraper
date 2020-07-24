const fastify = require('fastify')({
    logger: true
})
const scraper = require('./scrapper')
const config = require('./config')

//todo! add validation middle ware
//add url parser middleware
//abstract method into its controller

// Declare a route
fastify.get('/', async (request, response) => {
    const url = request.query.url
    const pageDetails = await scraper(url)
    if (!pageDetails)
        return response.status(400).send({ error: true, message: "could not get data for url" })

    return response.status(200).send({ error: false, data: pageDetails })
})

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