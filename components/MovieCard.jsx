import Link from 'next/link'
import { Haptics, ImpactStyle } from '@capacitor/haptics'

const MovieCard = (props) => {
  const { id, title, poster } = props

  const image = `https://image.tmdb.org/t/p/original${poster}`
  console.log(image)
  const hapticsImpactMedium = async () => {
    await Haptics.impact({ style: ImpactStyle.Medium })
    await hapticsVibrate()
  }

  const hapticsVibrate = async () => {
    Haptics.selectionStart()
  }

  return (
    <Link href={{ pathname: '/movie', query: { id: id } }} passHref key={id}>
      <div
        className="bg-white mx-2 rounded-xl my-2"
        onClick={hapticsImpactMedium}
      >
        <p className="p-2 text-sm">{title}</p>
        <img
          className="rounded-xl"
          src={image}
          alt={title}
          layout="fill"
        />{' '}
      </div>
    </Link>
  )
}

export default MovieCard
