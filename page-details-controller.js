const scraper = require("./scrapper");
const { redisClient } = require("./redis-connection");

//

module.exports = {
  async get(request, response) {
    const url = request.query.url;

    let pageDetails;
    //check redis for pageDetails and send if present
    try {
      pageDetails = await redisClient.get(url);
    } catch (err) {
      console.log(err);
    }

    if (pageDetails)
      return response
        .status(200)
        .send({ error: false, data: JSON.parse(pageDetails) });

    //scrap url
    pageDetails = await scraper(url);

    if (!pageDetails)
      return response.status(400).send({ error: true, message: "invalid url" });

    //store page details in redis
    redisClient.set(url, JSON.stringify(pageDetails), (err, reply) => {
      console.log(err);
    });
    return response.status(200).send({ error: false, data: pageDetails });
  },
};
