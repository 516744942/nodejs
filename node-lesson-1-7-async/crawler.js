var Crawler = require('crawler');
var jsdom = require('jsdom')
var c = new Crawler({
  jQuery: jsdom,
  maxConnections: 100,
  forceUTF8: true,
  callback: (error, res, done) => {
    if (error) {
      console.log(error);
    } else {
      console.log('res',res)
      var $ = res.$;
      // $ is Cheerio by default
      //a lean implementation of core jQuery designed specifically for the server
      var urls = $("#list a");
      console.log(urls)
    }
    done();
    // console.log('result',result)
  }
})
c.queue('http://www.biquku.com/0/330/')