const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const urls = [
    'https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/',
    'https://www.reddit.com/r/news/',
    'https://pusher.com/tutorials/web-scraper-node'

];

const scraper = url => {
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

            // get page title from the html head
            const pageTitle = $('title', 'head').text()

            console.log('PageTitle', pageTitle);
        })
        .catch(console.error);
}

for (const url of urls)
    scraper(url);

