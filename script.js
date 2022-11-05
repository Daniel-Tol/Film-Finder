let getMovieList = document.getElementById("movie-list");

const filterMovies = function (movieTitle) {
  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(movieTitle);
  });
  const addMoviesToDom = filteredMovies.map((movie) => {
    const newLi = document.createElement("li");
    const movieLink = document.createElement("a");
    movieLink.href = `https://www.imdb.com/title/${movie.imdbID}`;
    movieLink.target = "_blank";
    newLi.appendChild(movieLink);
    const moviePoster = document.createElement("img");
    moviePoster.src = movie.poster;
    movieLink.appendChild(moviePoster);
    return newLi;
  });
  while (getMovieList.lastChild) {
    getMovieList.lastChild.remove();
  }
  addMoviesToDom.forEach((movie) => {
    getMovieList.appendChild(movie);
  });
};
filterMovies("");

const filterLatestMovies = function () {
  const filteredMovies = movies.filter((movie) => {
    let integer = parseInt(movie.year, 10);
    return integer >= 2014;
  });
  const addMoviesToDom = filteredMovies.map((movie) => {
    const newLi = document.createElement("li");
    const movieLink = document.createElement("a");
    movieLink.href = `https://www.imdb.com/title/${movie.imdbID}`;
    movieLink.target = "_blank";
    newLi.appendChild(movieLink);
    const moviePoster = document.createElement("img");
    moviePoster.src = movie.poster;
    movieLink.appendChild(moviePoster);
    return newLi;
  });
  while (getMovieList.lastChild) {
    getMovieList.lastChild.remove();
  }
  addMoviesToDom.forEach((movie) => {
    getMovieList.appendChild(movie);
  });
};

const handleOnChangeEvent = function (e) {
  const movieSwitch = e.target.value;
  switch (movieSwitch) {
    case "latest-movies":
      filterLatestMovies();
      break;
    case "avenger":
    case "x-men":
    case "princess":
    case "batman":
      filterMovies(movieSwitch);
      break;
  }
};

const filterBtns = document.querySelectorAll('input[name="filter"]');
for (let btn of filterBtns) {
  btn.addEventListener("change", handleOnChangeEvent);
}

const filterSearchBox = document.getElementById("search-box");
filterSearchBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const movieSearch = e.target.value.toLowerCase();
    filterMovies(movieSearch);
  }
});

const filterSearchBtn = document.getElementById("search-btn");
filterSearchBtn.addEventListener("click", function () {
  const movieSearch = document.getElementById("search-box").value.toLowerCase();
  filterMovies(movieSearch);
});

const filterReset = document.getElementById("title");
filterReset.addEventListener("click", function () {
  filterMovies("");
});
