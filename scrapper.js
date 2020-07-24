const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const urls = [
    'https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/',
    // 'https://www.reddit.com/r/news/',
    // 'https://pusher.com/tutorials/web-scraper-node'

];

const scraper = async url => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const html = await page.content()
    const $ = cheerio.load(html);

    // get page title from the html head
    const pageTitle = $('title', 'head').text()

    //get page Description from metatag
    const pageDescription = $("meta[name|='description'], meta[property|='og\\:description']")
        .attr('content')


    const largestImage = await page.evaluate(() => {
        return [...document.getElementsByTagName('img')].sort((a, b) => b.clientWidth * b.clientHeight - a.clientWidth * a.clientHeight)[0].src;
    });

    console.log(largest_image)

}

for (const url of urls)
    scraper(url);



// get all images on the page,
//how to get image size
//find the largest image
//


//organisation
//latest tech
//documentation
//technical onboarding
//am not afriad
//learning
//people and culture
//people who have alighed with the company
//appreciated for what am doing 
//code review
//being able to work with other

//when i first joined  