import { useEffect, useState } from "react";
import { useQuery } from "react-query";

// Components
import Movie from './components/Movie/Movie';

// Styles
import { Container, Search, Section, Card, Pagination } from "./App.styles";

// Types
export type MovieType = {
  id: string,
  title: string,
  director: string,
  description: string,
  year: number,
  coverImage: string,
}

type FiltersType = {
  page: number,
  search?: string,
}

// Fetch API
const getMovies = async ({ page, search }: FiltersType): Promise<MovieType[]> => {
  return await (await fetch(`http://localhost:8080/movies?q=${search}&_page=${page}&_limit=6`)).json();
}

const useMovies = (filters: FiltersType) => {
  return useQuery<MovieType[]>(
    ['movies', filters], () => getMovies(filters),
    { keepPreviousData: true }
  );
}

const App = () => {

  // States
  const [filters, setFilters] = useState<FiltersType>({
    page: 1,
    search: '',
  });
  const [search, setSearch] = useState('');

  // Move to top every time pages change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [filters.page])
  
  // Function to search the movies
  const { data, isError, isLoading } = useMovies(filters);

  const handleSearch = () => {
    if (search === filters.search) return;
    setFilters({ page: 1, search });
  };

  // The search bar will clear if has no data
  useEffect(() => {
    if (search) return;
    handleSearch();
  }, [search])

  const handleClear = () => {
    setSearch('');
  }

  // Functions to move next and previous page
  const handleNextPage = () => {
    setFilters(state => ({
      ...state, page: state.page + 1
    }))
  }

  const handlePreviousPage = () => {
    if (filters.page <= 1) return;
    setFilters(state => ({
      ...state, page: state.page - 1
    }))
  }
  
  if (isLoading) return <p style={{textAlign: 'center'}}>Loading...</p>;
  return (
    <>
      <Container>
        <Search>
          <input type="text" placeholder="..." value={search}  onChange={({target}) => setSearch(target.value)} />
          <button onClick={handleSearch}>Search</button>
          <button onClick={handleClear}>Clear</button>
        </Search>
        <Section>
          {isError && (<p>Something went wrong!</p>)}
          {data?.map((movie) => (
            <Card key={movie.id}>
              <Movie key={movie.id} movie={movie} />
            </Card>
          ))}
        </Section>
        <Pagination>
          <button onClick={handlePreviousPage} disabled={filters.page === 1}>Previous Page</button>
          <span>{filters.page}</span>
          <button onClick={handleNextPage} disabled={data?.length !== 6}>Next Page</button>
        </Pagination>
      </Container>
    </>
  );
}

export default App;
