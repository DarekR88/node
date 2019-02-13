# node
Liri Media Robot

To begin the user will input "node liri.js" foloowed by 1 of 4 options "concert-this", "spotify-this-song", "movies-this", or "do-what-it-says".
Depending on the chosen option the user will then input an artist for "concert-this", a song for "spotify-this-song", or a movie title for "movie-this". (the option "do-what-it-says" does not take another augument and it's output will not change if given one)
![userEx](images/userInput.PNG?raw=true "Example User Input")

After filling in the command line the user will press the "enter" key.
Liri will then use a "switch case" to determine what was entered into the command line and return relevant information from an api. 
For "movie-this" the movie's title, release year, IMDB rating, Rotten Tomatoes rating, the country the movie is from, the languages the movie is in, a plot summary, and a list of actors that acted in the film.
![returnEx](images/example.PNG?raw=true "Example Liri Output")