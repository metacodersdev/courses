declare var require: any
const puppeteer = require('puppeteer');
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.course.findMany()
  console.log(allUsers)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    //process.exit(1);
  });
console.log('ts config');
(async () => {
 const browser = await puppeteer.launch({slowMo: 100,args: ['--no-sandbox','--disable-setuid-sandbox'],headless: false, executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});//executablePath:'google-chrome-stable' 
  const page = await browser.newPage();

  await page.goto('https://youtube.com/');

  // Type into search box.
  await page.type('#search-input #search', 'Node.js');

  // Wait for suggest overlay to appear and click "show all results".
  const allResultsSelector = '#search-icon-legacy';
  await page.waitForSelector(allResultsSelector);
  await page.click(allResultsSelector);

  // Wait for the results page to load and display the results.
  const resultsSelector = '#contents';
  await page.waitForSelector(resultsSelector);

  // Extract the results from the page.
  const links = await page.evaluate(resultsSelector => {
    const anchors = Array.from(document.querySelectorAll(resultsSelector));
    return anchors.map(anchor => {
      const title = anchor.textContent.split('|')[0].trim();
      return `${title} - ${anchor.href}`;
    });
  }, resultsSelector);
  console.log(links.join('\n'));

  await browser.close();
})();

