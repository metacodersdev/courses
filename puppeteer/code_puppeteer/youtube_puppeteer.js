console.log('js config');
const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({args: ['--no-sandbox','--disable-setuid-sandbox'],headless: true, executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
    const page = await browser.newPage();
    await page.goto('https://youtube.com');
    await page.screenshot({path: 'example.png'});
  
    await browser.close();
  })();