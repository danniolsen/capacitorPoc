import { useRouter } from 'next/dist/client/router'
import { fetcher } from '../helpers/fetcher'
import useSWR from 'swr'

const Article = () => {
  const router = useRouter()

  const { data } = useSWR({ url: `movie/${router?.query?.id}` }, fetcher)
  const image = `https://image.tmdb.org/t/p/original${data?.poster_path}`
  console.log(data)

  return (
    <div className="mx-2 mt-2">
      <p onClick={() => router?.back() || '/'}>Back</p>
      <p>fetch</p>
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img src={image} className="aspect-w-16" alt="hello" />
    </div>
  )
}

export default Article
