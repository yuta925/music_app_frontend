import { useContext } from 'react'
import { BulletinBoardPresenter } from './bulletinBoardPresenter'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { HomeContext } from '../../../pages/home'

export type BulletinBoards = {
  BuiltinBoardId: number
  ImageUrl: string
  Date: Date
  LocationId: string
  ArtistId: string
}

type getBulletins = {
  live_date: string
  locationid: string
  artistid: string
  skip: number
  limit: number
}

export const BulletinBoardContainer = () => {
  const {
    setBulletinBoards,
    live_date,
    artistid,
    locationid,
    setEditModalIsOpen,
  } = useContext(HomeContext)

  const useGetBulletins = useMutation({
    mutationFn: async (bulletin: getBulletins) =>
      await axios.get(`${import.meta.env.VITE_APP_API}/bulletin-board`, {
        params: bulletin,
      }),
    onSuccess: (data) => {
      console.log(data)
      setBulletinBoards(data.data)
    },
  })

  const fetchBulletins = async () => {
    console.log('button clicked')
    useGetBulletins
      .mutateAsync({
        live_date: live_date,
        artistid: artistid,
        locationid: locationid,
        // live_date: '2024-3-10',
        // artistid: '1',
        // locationid: '1',
        skip: 0,
        limit: 10,
      })
      .then((data) => {
        console.log(data)
        // setBulletinBoards(data.data)
        setEditModalIsOpen(false)
      })
  }

  return (
    <BulletinBoardPresenter
      enterBulletinBoard={fetchBulletins}
      // bulletinBoards={bulletinBoards}
    />
  )
}
