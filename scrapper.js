const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

const scraper = async (url) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const html = await page.content();
    const $ = cheerio.load(html);

    // get page title from the html head
    const pageTitle = $("title", "head").text();

    //get page Description from metatag
    const pageDescription = $(
      "meta[name|='description'], meta[property|='og\\:description']"
    ).attr("content");

    //get largest image on  page
    const largestImage = await page.evaluate(() => {
      return [...document.getElementsByTagName("img")].sort(
        (a, b) =>
          b.clientWidth * b.clientHeight - a.clientWidth * a.clientHeight
      )[0].src;
    });

    return { pageTitle, pageDescription, largestImage };
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = scraper;
