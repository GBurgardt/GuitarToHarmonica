export const addLyricsCollection = (lyrics) => {
  return {
    type: 'ADD_LYRICS',
    lyrics: lyrics
  }
}

// export const editMovieFromMoviesCollection = (idMovie, title, year, duration) => {
//   return {
//     type: 'EDIT_MOVIE',
//     idMovie: idMovie,
//     title: title,
//     year: year,
//     duration: duration
//   }
// }

//
// export const deleteMovieFromMoviesCollection = (idMovie) => {
//   return {
//     type: 'DELETE_MOVIE',
//     idMovie: idMovie
//   }
// }
