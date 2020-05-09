export const people = [
  {
    id: 0,
    name: "nohjunho1",
    age: 30,
    gender: "mail"
  },
  {
    id: 1,
    name: "nohjunho2",
    age: 31,
    gender: "mail"
  },
  {
    id: 2,
    name: "nohjunho3",
    age: 33,
    gender: "femail"
  }
];


export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id)
  return filteredPeople[0];
};


let movies = [
  {
    id: 0,
    name: "어벤져스",
    score: 1.1,
  },
  {
    id: 1,
    name: "겨울왕국",
    score: 2.2
  },
  {
    id: 2,
    name: "킹콩",
    score: 8.2
  }
]

export const getMovies = () => movies

export const getMovieById = id => {
  const filteredMovie = movies.filter(movie => movie.id === id)
  return filteredMovie[0];
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score
  }
  movies.push(newMovie);
  return newMovie;
}

export const deleteMovie = id => {
  const cleanMovies = movies.filter(movie => movie.id !== id);

  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true
  } else {
    return false;
  }
}



