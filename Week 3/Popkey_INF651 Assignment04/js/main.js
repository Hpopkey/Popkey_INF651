let movieList = [];


function addMovies(){
    const newMovie = document.getElementById("movie-name").value.trim();
    console.log(newMovie);

    if (newMovie !==""){
        movieList.push(newMovie);
        document.getElementById("movie-name").value ="";
        displayMovies();
    } else{
        alert("Please give a valid movie name");
    }
}

function removeMovie(index){
    movieList.splice(index, 1);
    displayMovies();
}


function displayMovies(){
    const watchList = document.getElementById("movie-list");
    watchList.innerHTML = "";
    for (let i = 0; i< movieList.length; i++){
        watchList.innerHTML += "<li>" + movieList[i] + '<button onclick="removeMovie(' + i + ')">Remove Movie</button></li>';
    }
}