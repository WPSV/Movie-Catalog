import { MovieType } from "../App";
import { Img, MovieYear, Director, Description } from "./Movie.styles";

type Props = {
  movie: MovieType;
}

const Movie: React.FC<Props> = ({ movie }) => (
  <>
    <Img src={movie.coverImage} alt={movie.title} />
    <MovieYear>{movie.title} - {movie.year}</MovieYear>
    <Director>{movie.director}</Director>
    <Description>{movie.description}</Description>
  </>
)

export default Movie;