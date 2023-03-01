const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://firefund.finance');

  const content = await page.content();


  //const element = document.querySelector('p.MuiTypography-root.MuiTypography-body1.css-1igm5rv');
if (content) {
  console.log(content);
} else {
  console.log("L'élément n'a pas été trouvé");
}
  

  

  await browser.close();
})();
