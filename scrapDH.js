var request = require('request');
var cheerio = require('cheerio');
cheerioTableparser = require('cheerio-tableparser');

var options = {
   url: "https://www.fff.fr/la-vie-des-clubs/24491/page-classement/competition-330525/phase-1/groupe-1",
headers: {
  'User-Agent' : 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
}
}
request(options, function(error, response, html){
                    if(!error){
                        var $ = cheerio.load(html);

                            const clubs = $('.classement a').map(function(i, element) {
                              var href = $(element).attr('href')

                              href = href.replace ('/la-vie-des-clubs/','')
                              href = href.replace ('/infos-cles','')

                              return {'club': $(element).html().trim(), 'ID': href}

                            }).get()

                          console.log(clubs);
                      }
                    })
