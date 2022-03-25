// Types
export type MovieType = {
    id: string,
    title: string,
    director: string,
    description: string,
    year: number,
    coverImage: string,
}
  
export type FiltersType = {
    page: number,
    search?: string,
}

export type Response = {
    total: number,
    movies: MovieType[]
}
  