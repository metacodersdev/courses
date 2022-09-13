const { PrismaClient } = require("@prisma/client");
const { launch } = require("puppeteer");


const udemy_puppetter = (async () => {
  const prismaClient = new PrismaClient();

  const browser = await launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.udemy.com/courses/development/", { timeout: 0 });
  
  const courseSelector = '.course-list--container--3zXPS > .popper--popper--2r2To:nth-child(1)';
  await page.waitForSelector(courseSelector);
  await page.click(courseSelector);
})();
