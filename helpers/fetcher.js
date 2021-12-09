import axios from 'axios'

export const fetcher = async ({ url, args }) =>
  await axios
    .get(
      `https://api.themoviedb.org/3/${url}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { params: args }
    )
    .then((res) => res.data)
    .catch((error) => error)
