require("dotenv").config();
var keys = require('./keys.js')
var fs = require('fs');
var moment = require('moment');
var axios = require("axios");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var inquirer = require("inquirer");
var userChoice = process.argv[2];
var title = process.argv.slice(3).join(" ")



switch (userChoice) {
    case 'concert-this':
        if (title != '') { bitCall() } else { title = 'cardi b'; bitCall() }
        break;
    case 'spotify-this-song':
        spotCall();   
        break;
    case 'movie-this':
        if (title != '') { movie() } else { title = 'mr nobody'; movie() }
        break;
    case 'do-what-it-says':
        dwis();
    default:
        console.log("error")
}


function bitCall() {
    axios.get("https://rest.bandsintown.com/artists/" + title + "/events?app_id=codingbootcamp").then(
        function (response) {
            for (var i = 0; i < response.data.length; i++) {
                console.log("Venue: " + response.data[i].venue.name)
                console.log("City: " + response.data[i].venue.city + ", " + response.data[i].venue.region)
                var date = moment(response.data[i].datetime).format("L");
                console.log("Date: " + date);
            };
        }
    )
}


function movie() {
    axios.get("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=e5302ae9").then(
        function (response) {
            console.log("Title: " + response.data.Title)
            console.log("Release Year: " + response.data.Year)
            console.log(response.data.Ratings[0].Source + ": " + response.data.Ratings[0].Value)
            console.log(response.data.Ratings[1].Source + ": " + response.data.Ratings[1].Value)
            console.log("Country: " + response.data.country)
            console.log("Languages: " + response.data.Language)
            console.log("Plot: " + response.data.Plot)
            console.log("Actors: " + response.data.Actors) 
        }
    )
}

function spotCall() {
    spotify.search({ type: 'track', query: title }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        } 
      console.log('Artist: ' + data.tracks.items[0].album.artists[0].name)
      console.log('Song title: ' + data.tracks.items[0].name)
      console.log('Song Preview: ' + data.tracks.items[0].preview_url)
      console.log('Album: ' + data.tracks.items[0].album.name)
      });
}
