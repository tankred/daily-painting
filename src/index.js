const argv = require('minimist')(process.argv.slice(2))
const puppeteer = require('puppeteer')
const chance = require('chance').Chance()
const version = '0.3.9'

const url = 'https://www.nytimes.com'
const chint = chance.integer()

let dateobj = new Date()
// current date
let date = ("0" + dateobj.getDate()).slice(-2)
// current month
let month = ("0" + (dateobj.getMonth() + 1)).slice(-2)
// current year
let year = dateobj.getFullYear()
// prints date in YYYYMMDD format
let ymd = year + month + date

const help = `
--help # default no params required
-h     # help
-V     # version
--version 

SAMPLE
node src/index.js
`

if (argv.help === true || argv.h === true) {
  console.log(help)
  process.exit()
}

if (argv.V === true || argv.version === true) {
  console.log(version)
  process.exit()
}

async function run () {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
  await page.setViewport({ width: 1024, height: 800 })
  await page.evaluate(_ => { 
    window.scrollBy(0, 311)
  })
  await page.screenshot({
    path: './dist/img/NYT-' + ymd + '-' + chint + '.jpg',
    type: 'jpeg',
    fullPage: false
  })
  await page.close()
  await browser.close()
}
run()
// EOF
