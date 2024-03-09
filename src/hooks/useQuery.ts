import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Bulletin } from '../types'

export const useQueryBulletin = () => {
  const getBulletin = async () => {
    const { data } = await axios.get<Bulletin[]>(
      `${import.meta.env.VITE_APP_API}/bulletin/${date}/${artist}`,
      { withCredentials: true }
    )
  }
  return useQuery<Bulletin[]>({
    useQuery: [`bulletin`],
    queryFn: getBulletin,
    staleTime: Infinity,
  })
}
