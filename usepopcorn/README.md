# Use popcorn project

This is an interactive web page that allows users to search for a movie, add to the watchlist and rate the movie.

## Requirements

1. The page should have a `header` component with logo on the left corner, a Search box in the center and the text "Found[x] results" on the right.
2. The `SearchBox` component should do the following
   - Start searching for a movie if user types atleast 3 characters.
   - The number of movies should be displayed in the header.
   - While the search is in progress, a `Loading` component should be displayed.
   - If no movies are found message should be displayed.
   - Any error occurs during fetching, display an error component.
3. The main section should contain two components on each half of the screen.
   - First component displaying list of movies found in the search.
   - Second component should display the watched movies list and summary of the movies that the user watched.
4. Each item in the first component `MovieList` should display the movie poster, title and year of release.
5. On Clicking a movie in the `MovieList`, the second half of the screen should display the movie details(`MovieDetail`). Which should include
   - Poster
   - Title
   - Release date
   - Runtime
   - Genres
   - ImdbRating
   - A widget allowing to rate the movie out of 10 stars (Rating Component)
   - Movie Plot
   - Director information
   - A back button to close the MovieDetail component
6. The user should be able to add the movie to the list of movies once the user rates the movie.
7. The MovieDetail should close once the user adds the movie to the watched list and the summary stats should be updated accordingly.
8. The second component `WatchedMovieBox` should contain watched movies summary which should include
   - Number of movies watched
   - Average imdb rating of the movies watched
   - Average user rating of all the movies watched
   - Average runtime of all the movies watched
9. The `WatchedMovieBox` should display list of all the movies that user added to watched movies list.
10. Each item in the movie watched list should contain
    - Movie poster
    - Title
    - ImdbRating
    - User Rating
    - Runtime
    - Delete button to remove movie from the list
11. The title of the page should reflect the movie selected. If no movie is selected, the title should be usepopcorn.
12. The MovieDetail component should close when `ESC` key is pressed if it is open.
13. Once the page is loaded the input element in the search should automatically have the focus.
14. If the input in the search box doesnot currently have the focus, and the user presses the Enter key, the input in the search box should get the focus and the contents of the search box should be cleared.
15. A custom hook should be used to make api calls to the omdb api.
16. The movie list and the watched movie box should be minimisable and expandable on clicking a button.

> NOTE: details of using OMDB api can be found at [OMBD API](https://www.omdbapi.com/)

## Concepts demonstrated

1. Components
2. Composition
3. Reusability
4. Propdrilling issue. Solution to prop drilling using composition
5. Building reusable star rating component
6. Prop types
7. Useeffect hool
8. Asynchronous functions
9. Clean up functions in useeffect
10. Using Abort controller
11. Custom hooks
12. Refs
13. Using localstorage to persist state

## Reference

[Ultimate React Course by Jonas schmedtmann](https://github.com/jonasschmedtmann/ultimate-react-course)
