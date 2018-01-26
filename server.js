const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
var Spotify = require('./spotify.js')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const spotifyApi = new Spotify();

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl


    switch(pathname) {
      case '/get':
        spotifyApi.get(query.q).then((result) => {
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify(result));
        });
        break;
      case '/search':
        app.render(req, res, '/search', query)
        break;
      default:
        handle(req, res, parsedUrl)
    }




  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})

