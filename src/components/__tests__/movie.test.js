import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Movie from '../Movie/Movie';

afterEach(() => {
  cleanup();
})

test('<Movie /> is rendered ?', () => {
  const movieData = {
    title: "Dolores quas aperiam",
    director: "Willard Nolan",
    description: "Veritatis nobis similique laudantium quisquam. Numquam quidem sapiente voluptatem et at consequatur. Nihil ut incidunt illum laboriosam et dolore quisquam. Voluptatem quos rerum in aspernatur omnis est nihil aut. Non voluptas animi voluptas. Et laudantium quia atque occaecati sunt adipisci.",
    year: 2020,
    coverImage: "http://placeimg.com/640/480/business"
    }
  render(<Movie movie={movieData} />);
  const movieElement = screen.getByTestId("movie");
  expect(movieElement).toBeInTheDocument();
})