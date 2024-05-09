function carouselEffect() {
  const arr = [
    "https://images8.alphacoders.com/131/1318674.jpg",
    "https://images2.alphacoders.com/979/979960.jpg",
    "https://wallpapercave.com/wp/wp4326214.jpg",
    "https://wallpapercave.com/wp/wp3091510.jpg",
    "https://wallpapers.com/images/hd/4k-avengers-title-logo-rqbrq32uc7af1dro.jpg",
    "https://images2.alphacoders.com/130/thumb-1920-1301713.jpg",
    "https://images3.alphacoders.com/131/1319314.jpeg",
    "https://wallpapercave.com/wp/wp8328112.jpg",
    "https://images2.alphacoders.com/134/1343599.png",
  ];

  let Image = document.createElement("img");
  Image.src = arr[0];

  document.getElementById("SliderImages").append(Image);

  let i = 0;
  setInterval(() => {
    if (i === arr.length) {
      i = 0;
    }
    Image.src = arr[i];
    i++;
  }, 2000);
}
carouselEffect();

const movies = [
  {
    name: "RRR",
    year: 2022,
    director: "S. S. Rajamouli",
    rating: 8,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7642/1307642-v-3d3b6c61f97e",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "Rampage",
    year: 2018,
    director: "Brad Peyton",
    rating: 9,
    img: "https://www.hdwallpapers.in/download/rampage_4k_hd_movies-HD.jpg",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "Godzilla",
    year: 2014,
    director: "Adam Wingard",
    rating: 10,
    img: "https://www.pixel4k.com/wp-content/uploads/2021/04/godzilla-king-of-the-ocean-4k_1618165968.jpg.webp",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "Pacific Rim",
    year: 2013,
    director: "Guillermo",
    rating: 9,
    img: "https://wallpaper.dog/large/10915274.jpg",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "Vikram",
    year: 2022,
    director: "Lokesh Kanagaraj",
    rating: 10,
    img: "https://e0.pxfuel.com/wallpapers/242/506/desktop-wallpaper-vikram-2022-kamal-haasan-vikram.jpg",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "The Avengers",
    year: 2012,
    director: "Joss Whendon",
    rating: 9,
    img: "https://wallpapers.com/images/featured/marvel-movie-km5otxtmsqb0ijdb.jpg",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "Avengers End Game",
    year: 2019,
    director: "Anthony Russo",
    rating: 9.2,
    img: "https://wallpapers.com/images/featured/4k-marvel-awrqh8lcgyk3crjc.jpg",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "Black Panther",
    year: 2018,
    director: "Ryan Coogler",
    rating: 7.6,
    img: "https://images.hdqwalls.com/wallpapers/black-panther-4k-movie-poster-vi.jpg",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "Godzilla vs Kong",
    year: 2021,
    director: "Adam Wingard",
    rating: 9.6,
    img: "https://wallpapercave.com/wp/wp11931791.jpg",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "Aqua Man",
    year: 2018,
    director: "James Wan",
    rating: 8,
    img: "https://getwallpapers.com/wallpaper/full/5/1/6/1495742-beautiful-4k-movie-wallpapers-1920x1080-photo.jpg",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "Goodluck Jerry	",
    year: 2019,
    director: "Siddharth",
    rating: 7,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/901/1310901-v-e9763c24f44d",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "MSD",
    year: 2020,
    director: "Shyam Lank",
    rating: 8.5,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "Doctor Strange",
    year: 2016,
    director: "Scott Derrickson",
    rating: 9,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "Ford vs Ferrari",
    year: 2019,
    director: "James Mangold",
    rating: 8.7,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3150/813150-v",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "Masaan",
    year: 2021,
    director: "James Wang",
    rating: 8.8,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/7441/1000087441/1000087441-v",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "The lion king",
    year: 2019,
    director: "Don Hall and Chris Sand",
    rating: 8.4,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "The Dark knight",
    year: 2008,
    director: "Christopher Nolan",
    rating: 8,
    img: "https://images4.alphacoders.com/573/thumb-440-57394.webp",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "Joker",
    year: 2019,
    director: "Todd Phillips",
    rating: 9,
    img: "https://images.hdqwalls.com/download/joker-movie-6u-1080x1920.jpg",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "DeadPool",
    year: 2016,
    director: "David Leitch",
    rating: 7.2,
    img: "https://wallpaper.dog/large/10915511.jpg",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "Uncharted",
    year: 2007,
    director: "Sam Mendes",
    rating: 6,
    img: "https://www.ixpap.com/images/2022/02/Uncharted-Movie-Wallpaper.jpg",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "Jurassic World",
    year: 2015,
    director: "Colin Trevorrow",
    rating: 9,
    img: "https://wallpapercave.com/wp/wp9049807.jpg",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "Transformers",
    year: 2017,
    director: "Michael Bay",
    rating: 8,
    img: "https://wallpapershome.com/images/pages/ico_h/24472.jpg",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "Dune Part-2",
    year: 2024,
    director: "Deniz Gamze Erg",
    rating: 10,
    img: "https://4kwallpapers.com/images/wallpapers/dune-part-two-8k-2048x2048-15003.jpg",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "Dune Part-1",
    year: 2016,
    director: "Denis Villeneuve",
    rating: 9,
    img: "https://lh5.googleusercontent.com/proxy/HvoimFADklSvu4UaipS1P8rRQRoFYVaWq_Z-32yNlq9MI2rqFCXnhosqSk_eYKDxQERKjkq6VjSRigV5HmQw2SWnOFt5L1YkF6viO4XH-B-uWaElE2t1gUVCZxFr-jAOBne7",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
  {
    name: "Fighter",
    year: 2024,
    director: "Taika Waititi",
    rating: 5,
    img: "https://wallpapercave.com/wp/wp13455013.jpg",
    icon: "https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png",
  },
];

function displayMovies(movies) {
  document.getElementById("Movies").innerHTML = "";

  movies.forEach(function (value) {
    let div = document.createElement("div");

    let Image = document.createElement("img");
    Image.src = value.img;
    Image.id = "Image-Styling";

    let Icon = document.createElement("img");
    Icon.id = "Icon-Styling";
    Icon.src = value.icon;

    let year = document.createElement("p");
    year.innerText = "Year: " + value.year;
    year.id = "Year";

    let director = document.createElement("p");
    director.innerText = "Director: " + value.director;
    director.id = "Director";

    let p1 = document.createElement("p");
    p1.innerText = value.name;
    p1.id = "movieName";

    div.append(Image, Icon, year, director, p1);
    document.getElementById("Movies").append(div);
  });
}
// displayMovies(movies);

setTimeout(function () {
  document.getElementById("Slider").innerHTML = "";
  displayMovies(movies);
}, 3000);

document.querySelector("#Search").addEventListener("input", FilterFunc);
function FilterFunc() {
  let InputValue = document.getElementById("Search").value;
  let FilterMovies = movies.filter((value) => {
    return value.name.toLowerCase().includes(InputValue);
  });
  displayMovies(FilterMovies);
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
  OutputMovies(displayMovies(movies));
});
