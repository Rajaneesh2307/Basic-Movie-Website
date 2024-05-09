async function fetchMovies() {
  let Movies = [];
  let page = 1;

  while (Movies.length < 100) {
    let fetchData = await fetch(
      `https://www.omdbapi.com/?s=movie&page=${page}&apikey=bb842675`
    );
    let data = await fetchData.json();
    Movies.push(...data.Search);
    page++;
  }
  return Movies;
}

let MoviesData;
async function displayMoviesConsole() {
  try {
    let movies = await fetchMovies();
    MoviesData = movies;
    console.log(movies);
    DisplayDataInDom(movies);
  } catch (error) {
    console.error("Error:", error);
  }
}
// displayMoviesConsole();

function DisplayDataInDom(MoviesData) {
  document.getElementById("output").innerHTML = "";

  MoviesData.forEach(function (value) {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = value.Poster;
    image.id = "Image-Styling";

    let icon = document.createElement("img");
    icon.src = "25549-9-play-button-hd.png";
    icon.id = "IconStyle";

    let title = document.createElement("p");
    title.innerText = value.Title;
    title.id = "Title";

    let year = document.createElement("p");
    year.innerText = "Year: " + value.Year;
    year.id = "Year";

    let director = document.createElement("p");
    director.innerText = "Director: Jhon Mathew Hendricks";
    director.id = "Director";

    div.append(image, icon, title, year, director);
    document.getElementById("output").appendChild(div);
  });
}

setTimeout(function () {
  document.getElementById("Slider").innerHTML = "";
  displayMoviesConsole();
}, 3000);

document.querySelector("#Search").addEventListener("input", FilterFunc);
function FilterFunc() {
  let InputValue = document.getElementById("Search").value;
  let FilterValue = MoviesData.filter((value) => {
    return value.Title.toLowerCase().includes(InputValue);
  });
  DisplayDataInDom(FilterValue);
}

function Debounce(func, wait) {
  let TimerID;
  return function (value) {
    clearTimeout(TimerID);
    TimerID = setTimeout(() => {
      func(value);
    }, wait);
  };
}

let OutputMovies = Debounce(FilterFunc, 1500);
document.querySelector("#Search").addEventListener("keyup", function () {
  OutputMovies(DisplayDataInDom(MoviesData));
});
