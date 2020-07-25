const scraper = require('./scrapper')

//todo! add validation middle ware
//add url parser middleware
//abstract method into its controller

module.exports = {
    async get(request, response) {
        const url = request.query.url
        const pageDetails = await scraper(url)
        if (!pageDetails)
            return response.status(400).send({ error: true, message: "could not get data for url" })

        return response.status(200).send({ error: false, data: pageDetails })
    }
}