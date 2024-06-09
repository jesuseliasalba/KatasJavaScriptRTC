const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
];

ShortMovie = [];
HalfMovie = [];
LongMovie = [];

for (let movie of movies) {
    if (movie.durationInMinutes < 100) {
        ShortMovie.push(movie.name);
    } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes <= 200) {
        HalfMovie.push(movie.name);
    } else {
        LongMovie.push(movie.name);
    }
}

console.log(`Short movie : ${ShortMovie}`)
console.log(`Half movie : ${HalfMovie}`)
console.log(`Long movie : ${LongMovie}`)