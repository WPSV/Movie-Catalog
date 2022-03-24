import { MovieType } from "../../App";
import { Img, MovieYear, Director, Description } from "./Movie.styles";

// Type
type Props = {
  movie: MovieType;
}

// Movie component
const Movie: React.FC<Props> = ({ movie }) => (
  <div data-testid="movie">
    <Img src={movie.coverImage} alt={movie.title} />
    <MovieYear>{movie.title} - {movie.year}</MovieYear>
    <Director>{movie.director}</Director>
    <Description>{movie.description}</Description>
  </div>
)

export default Movie;