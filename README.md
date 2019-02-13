# node
Liri Media Robot
Liri media robot is a simple application that uses node.js, several apis, and the terminal to take in user input and return information from the apis. 
To begin the user will input "node liri.js" foloowed by 1 of 4 options "concert-this", "spotify-this-song", "movies-this", or "do-what-it-says".
Depending on the chosen option the user will then input an artist for "concert-this", a song for "spotify-this-song", or a movie title for "movie-this". (the option "do-what-it-says" does not take another augument and it's output will not change if given one)
![userEx](images/userInput.PNG?raw=true "Example User Input")

After filling in the command line the user will press the "enter" key.
Liri will then use a javaScript "switch case" to determine what was entered into the command line and return relevant information from an api. 
For "movie-this" the movie's title, release year, IMDB rating, Rotten Tomatoes rating, the country the movie is from, the languages the movie is in, a plot summary, and a list of actors that acted in the film.
![returnEx](images/example.PNG?raw=true "Example Liri Output")

The "do-what-it-says" command utilizes information from a txt file to return information based on what is in the txt file.
for example this txt file will return spotify information on the song "I Want it That Way"
![dwistxt](images/dwis.PNG?raw=true "example txt file")