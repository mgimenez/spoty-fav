var SpotifyWebApi = require('spotify-web-api-node');

module.exports = class Spotify {

 constructor(){

   this.spotify = new SpotifyWebApi({
     clientId: '352f5f9efaeb40169a39d3e926f9a1e9',
     clientSecret: 'da71ffb9dca44188aa5485a8068692eb',
     redirectUri: 'http://localhost:3000/'
   })

   this.spotify.clientCredentialsGrant().then((result) => {
     this.spotify.setAccessToken(result.body.access_token);
   })
 }

 get(str){
   return this.spotify.searchTracks(str);
 }
}

