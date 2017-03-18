/*var request = require('request');
var cheerio = require('cheerio');
cheerioTableparser = require('cheerio-tableparser');


var mongoose = require('mongoose');

    var url = 'https://www.fff.fr/myfff/designations';

    var loginSchema = mongoose.Schema({
       username: String,
       password: String
    });

    mongoose.connect(url);

    app.post('/', function(req, res) {

       var Book = mongoose.model('book', loginSchema);

       var book1 = new Book({
           username: 'felicien.gazon@gmail.com',
           password: 'Mpby78370lur!'
       });
       book1.save(function(err) {
           if (err) throw err;
           console.log("Login saved succesfully");
           res.end('success');
       }
       );
    });

    app.listen(8000, function() {
       console.log("Server is running!");
    });
*/



var options = {
   url: "https://www.fff.fr/myfff/designations",
headers: {
  'User-Agent' : 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
}
}
request(options, function(error, response, html){
                    if(!error){
                        var $ = cheerio.load(html);

                            const clubs = $(.   ).map(function(i, element) {
                            console.log(clubs);
                              return {'club': $(element).html().trim(), 'href': $(element).attr('href')}

                            }).get()

                          console.log(clubs);
                      }
                    })
