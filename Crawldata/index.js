const puppeteer = require('puppeteer');


const run = async () => {
    const browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto("https://www.themoviedb.org/");
    const element = await page.waitForSelector("body > div.page_wrap._wrap");
    await element.click();
    console.log(element);
}

run()