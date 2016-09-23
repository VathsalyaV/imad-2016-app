var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    articleOne: {
        title: 'Article One | VathsalyaV',
        heading: 'Article One',
        date: 'Sep 5, 2016',
        content: `<p>
                    This is content for my article one page. This is content for my article one page. This is content for my article one page.
                    This is content for my article one page. This is content for my article one page. This is content for my article one page.
                    This is content for my article one page. This is content for my article one page. This is content for my article one page.
                </p>
                <p>
                    This is content for my article one page. This is content for my article one page. This is content for my article one page.
                    This is content for my article one page. This is content for my article one page. This is content for my article one page.
                    This is content for my article one page. This is content for my article one page. This is content for my article one page.
                </p>
                <p>
                    This is content for my article one page. This is content for my article one page. This is content for my article one page.
                    This is content for my article one page. This is content for my article one page. This is content for my article one page.
                    This is content for my article one page. This is content for my article one page. This is content for my article one page.
                </p>
                <p>
                    This is content for my article one page. This is content for my article one page. This is content for my article one page.
                    This is content for my article one page. This is content for my article one page. This is content for my article one page.
                    This is content for my article one page. This is content for my article one page. This is content for my article one page.
                </p> `
    },
    articleTwo: {
        title: 'Article Two | VathsalyaV',
        heading: 'Article Two',
        date: 'Sep 15, 2016',
        content: `<p>
                    This is content for my article Two page. This is content for my article Two page. This is content for my article Two page.
                    This is content for my article Two page. This is content for my article Two page. This is content for my article Two page.
                    This is content for my article Two page. This is content for my article Two page. This is content for my article Two page.
                </p>
                 <p>
                    This is content for my article Two page. This is content for my article Two page. This is content for my article Two page.
                    This is content for my article Two page. This is content for my article Two page. This is content for my article Two page.
                    This is content for my article Two page. This is content for my article Two page. This is content for my article Two page.
                </p>
                 <p>
                    This is content for my article Two page. This is content for my article Two page. This is content for my article Two page.
                    This is content for my article Two page. This is content for my article Two page. This is content for my article Two page.
                    This is content for my article Two page. This is content for my article Two page. This is content for my article Two page.
                </p>
                 <p>
                    This is content for my article Two page. This is content for my article Two page. This is content for my article Two page.
                    This is content for my article Two page. This is content for my article Two page. This is content for my article Two page.
                    This is content for my article Two page. This is content for my article Two page. This is content for my article Two page.
                </p> `
    },
    articleThree: {
        title: 'Article Three | VathsalyaV',
        heading: 'Article Three',
        date: 'Sep 23, 2016',
        content: `<p>
                    This is content for my article Three page. This is content for my article Three page. This is content for my article Three page.
                    This is content for my article Three page. This is content for my article Three page. This is content for my article Three page.
                    This is content for my article Three page. This is content for my article Three page. This is content for my article Three page.
                </p>
                <p>
                    This is content for my article Three page. This is content for my article Three page. This is content for my article Three page.
                    This is content for my article Three page. This is content for my article Three page. This is content for my article Three page.
                    This is content for my article Three page. This is content for my article Three page. This is content for my article Three page.
                </p>
                <p>
                    This is content for my article Three page. This is content for my article Three page. This is content for my article Three page.
                    This is content for my article Three page. This is content for my article Three page. This is content for my article Three page.
                    This is content for my article Three page. This is content for my article Three page. This is content for my article Three page.
                </p>
                <p>
                    This is content for my article Three page. This is content for my article Three page. This is content for my article Three page.
                    This is content for my article Three page. This is content for my article Three page. This is content for my article Three page.
                    This is content for my article Three page. This is content for my article Three page. This is content for my article Three page.
                </p> `    
    },
};
function createTemplate(data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            ${title}
            <meta name="viewport" content="width-device-width, initial-scale-1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
        
                   ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one' , function (req , res) {
    res.send(createTemplate(articleOne));
});

app.get('/article-two' , function (req , res) {
    res.send(createTemplate(articleTwo));
});

app.get('/article-three' , function (req , res) {
    res.send(createTemplate(articleThree));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
