# Daily (On Kawara) painting generator

Create app to generate a [daily painting in html (see codepen)](https://codepen.io/tankred/pen/eHspE)

* 10 . clip some copy from NYT to accompany the html painting
* 20 . publish a screenshot on your favorite img stream

## Getting Started

automated screenshots with [puppeteer](https://www.npmjs.com/package/puppeteer)

```
node .\take-screenshot.js
```

use [chancejs](http://chancejs.com/) on puppeteer projects 
install [chance-cli](https://github.com/chancejs/chance-cli)
Chance: usage

```
chance.company()
```

explore [charlatan](https://github.com/nodeca/charlatan)
persona=generator

use npm pageres to create full page screenshots 6 ♦
```
npm install pageres-cli
pageres www.charlesverraest.be 1024x768 1366x768 #2 screenshots
pageres www.vives.be/vrijstellingen 1024x768 1366x768
```
Lab pageres > using [pageres api](https://www.npmjs.com/package/pageres)

update pageres: 
```
npm update -g pageres
```
Using a list of screen resolutions 
```
pageres <url> < screen-resolutions.txt
```

SAMPLE: 
```
pageres web.vives.be/webshop 1024x768 1366x768
```

[modify click to specific page](https://github.com/checkly/puppeteer-examples/blob/master/3.%20login/github.js)


### Prerequisites

What things you need to install the software and how to install them

```
npm i -g puppeteer
npm install
```

### Generating a daily painting

Get a screenshot

```
node --unhandled-rejections=strict src/index.js
```


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/tankred/daily-painting/tags).

## Authors

Tankred

## License

[GPLv3 license](gpl-3.0.md)

## Acknowledgments

* Hat tip to On Kawara
* [March 22, 2020](https://codepen.io/tankred/pen/IrHsc)
* [how to use functions in puppeteer?](https://codeburst.io/a-guide-to-automating-scraping-the-web-with-javascript-chrome-puppeteer-node-js-b18efb9e9921)
* [Getting started with puppeteer](https://medium.com/@e_mad_ehsan/getting-started-with-puppeteer-and-chrome-headless-for-web-scrapping-6bf5979dee3e)

