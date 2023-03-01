const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const url = 'https://firefund.finance'

JSDOM.fromURL(url).then(dom => {
    console.log(dom.window.document.documentElement.innerHTML)
    const myDivContent = dom.window.document.querySelector('p.MuiTypography-root.MuiTypography-body1.css-1igm5rv');
    console.log(myDivContent);
  }).catch(error => {
    console.error(error);
  });