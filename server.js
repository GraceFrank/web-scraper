const fastify = require('fastify')({
    logger: true
})
const scrapper = require('./scrapper')
const scraper = require('./scrapper')

// Declare a route
fastify.get('/', async (request, response) => {
    const url = request.query.url
    const pageDetails = await scraper(url)
    if (!pageDetails)
        return response.status(400).send({ error: true, message: "could not get data for url" })

    return response.status(200).send({ error: false, data: pageDetails })
})



//Todo! change port to env variable

// Run the server!
fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})