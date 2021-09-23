var http = require('http')
var https = require('https')
const cheerio = require('cheerio')

function filterData(data) {
  let $ = cheerio.load(data)
  let $movieList = $('.index-container')
  let movies = []
  $movieList.each((index, value) => {
    console.log('index',index)
    movies.push({
      title: $(value).find('.index-adv-center').attr('class'),
      score: $(value).find('.index-adv-center').text(),
    })
  })
  console.log('movies',movies)
  // response.end(JSON.stringify(movies))
}

const server = http.createServer((req, res) => {
  var data = ''
  // response.writeHeader(200, {
  //   'content-type': 'application/json;charset=utf-8',
  //   'Access-Control-allow-Origin': '*'
  // })
  https.get('https://www.meizu.com', (result) => {
    result.on('data', chunk => {
      data += chunk
    })
    result.on('end', () => {
      filterData(data)
    })
  })
  // req.end()
})
server.listen(8080)