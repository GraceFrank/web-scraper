const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const urls = [
    'https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/',
];

puppeteer
    .launch()
    .then(browser => browser.newPage())
    .then(page => {
        return page.goto(url).then(function () {
            return page.content();
        });
    })
    .then(html => {
        const $ = cheerio.load(html);

        // get page title
        const pageTitle = $('title').text()

        console.log(pageTitle);
    })
    .catch(console.error); 