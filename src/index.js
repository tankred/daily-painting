const puppeteer = require('puppeteer')
const chance = require('chance').Chance()
const version = '0.3.7'
// const url = "https://slashdot.org";
const url = 'https://www.nytimes.com'
var chint = chance.integer()

async function run() {     
   let browser = await puppeteer.launch({ headless: true })
   let page = await browser.newPage()
   await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
   await page.setViewport({ width: 1024, height: 800 })
   await page.screenshot({
    path: './dist/img/screenshot-NYT-'+chint+'.jpg',
    type: 'jpeg',
    fullPage: true
  })
  await page.close()
  await browser.close()
} 
run()

// var n = '33' // first image will be n+1
// var m = 60
// var url
// var d = '../dist/img/'
// var o
// var p
// var i
// let x = new Set([35, 37, 38, 53, 58, 59, 60, 64, 68, 70, 71, 77, 79, 84, 85, 87, 90, 91, 92]); // exclude 404s and not updated cams
// let y = Array.from(x); // convert to array
// 
// (async() => {
//   console.log('version ' + version)
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()
//   for (i = 0; i < m; i++) {
//     n++
//     if (!y.includes(n)) { 
//       url = 'https://app.c-site.eu/public/images/kortrijk-hogeschool/' + n + '/'
//       o = 'i'+stamp+'-' + n + '.png'
//       p = d + o
//       await page.goto(url)
//       await page.screenshot({ path: p })
//     } else {
//       console.log('skip:' + n)
//     }
//   }
//   await browser.close()
//  })()
// 
