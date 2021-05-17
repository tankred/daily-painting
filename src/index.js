const argv = require('minimist')(process.argv.slice(2))
const puppeteer = require('puppeteer')
const chance = require('chance').Chance()
const version = '0.3.8'

const url = 'https://www.nytimes.com'
const chint = chance.integer()

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
  await page.screenshot({
    path: './dist/img/screenshot-NYT-' + chint + '.jpg',
    type: 'jpeg',
    fullPage: true
  })
  await page.close()
  await browser.close()
}
run()
// EOF
