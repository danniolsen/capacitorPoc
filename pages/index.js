import MovieCard from '../components/MovieCard'
import { fetcher } from '../helpers/fetcher'
import useSWR from 'swr'

const Movies = () => {
  const { data } = useSWR(
    { url: 'discover/movie', args: { primary_release_year: 2022 } },
    fetcher
  )

  return (
    <div>
      <div className="mb-24">
        {!data && <p>Loading</p>}

        {data?.results?.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie?.id}
            poster={movie?.poster_path}
            title={movie?.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Movies
