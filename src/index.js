const argv = require('minimist')(process.argv.slice(2))
const puppeteer = require('puppeteer')
const chance = require('chance').Chance()
const version = '0.5.9'

const chint = chance.integer()

let dateobj = new Date()         // current date
let date = ("0" + dateobj.getDate()).slice(-2)
let month = ("0" + (dateobj.getMonth() + 1)).slice(-2) // current month
let year = dateobj.getFullYear() // current year
let ymd = year + month + date    // prints date in YYYYMMDD format

const help = `
--help # default no params required
-h     # help
-V     # version
--version 
-N [URL] 

SAMPLE
node src/index.js
node src/index.js -N 'https://www.destandaard.be'
ALERT : run from ROOT of repo! 
`

if (argv.help === true || argv.h === true) {
  console.log(help)
  process.exit()
}

if (argv.V === true || argv.version === true) {
  //? Wrap the things you want to log in curly braces. The console then logs both the name and the value of what you want to know about.
  console.log({version})
  process.exit()
}
 
const url = (argv.N || 'https://www.nytimes.com');

async function run () {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)
  await page.setViewport({width: 1024, height: 800})
  await page.evaluate(_ => { 
    window.scrollBy(0, 31)
  })
  await page.screenshot({
    path: './dist/img/NWS-' + ymd + '-' + chint + '.jpg' 
  })
  await browser.close()
}
run()
console.log('feh ./dist/img/NWS-' + ymd + '-' + chint + '.jpg')
// EOF
