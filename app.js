const container = document.querySelector(".container");

const getMovies = async function () {
    const response = await fetch("https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json");
    const data = await response.json();

    const entries = data.entries;

    // console.log(response);
    console.log(entries);

    showArrayData(entries);

}

function showArrayData(entries) {
    container.innerHTML = "<h1>Movies</h1>";

    entries.forEach(movie => {
        container.innerHTML += `
        <div>
        <img src=${movie.images.posterArt.url}></img>
        <div>
        <h2>${movie.title}</h2>
        <h3>${movie.description}</h3>
        </div>
        </div>
        `
    });
}

getMovies();