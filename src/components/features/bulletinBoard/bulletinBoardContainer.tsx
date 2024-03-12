import { useState, useContext, createContext } from 'react'
import { BulletinBoardPresenter } from './bulletinBoardPresenter'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { HomeContext } from '../../../pages/home'
import { artistOptions } from '../../../assets/Options/artistOptions'

export type BulletinBoards = {
  BuiltinBoardId: string
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

export const LiveContext = createContext<{
  artistNames: setBulletins[]
  setArtistNames: React.Dispatch<React.SetStateAction<setBulletins[]>>
}>(
  {} as {
    artistNames: setBulletins[]
    setArtistNames: React.Dispatch<React.SetStateAction<setBulletins[]>>
  }
)

type setBulletins = {
  BuiltinBoardId: string
  ImageUrl: string
  Date: Date
  liveName: string
  artistName: string
}

export const BulletinBoardContainer = () => {
  const { setBulletinBoards, live_date, artistid, locationid } =
    useContext(HomeContext)

  const [artistNames, setArtistNames] = useState<setBulletins[]>([])

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
        skip: 0,
        limit: 10,
      })
      .then((data) => {
        artistOptions.find((name) =>
          name.ArtistId === data.data.ArtistId
            ? setArtistNames([
                {
                  BuiltinBoardId: data.data.BuiltinBoardId,
                  ImageUrl: data.data.ImageUrl,
                  Date: data.data.Date,
                  liveName: data.data.LocationId,
                  artistName: name.Name,
                },
              ])
            : setArtistNames([
                {
                  BuiltinBoardId: data.data.BuiltinBoardId,
                  ImageUrl: data.data.ImageUrl,
                  Date: data.data.Date,
                  liveName: data.data.LocationId,
                  artistName: 'No artists',
                },
              ])
        )
        console.log(artistNames)
        // artistOptions.map((name) => {
        //   name.ArtistId === data.data.ArtistId
        //     ? setArtistNames([name.Name])
        //     : setArtistNames(['No artists'])
        //   console.log(name.ArtistId)
        //   console.log(artistNames)
        // })
      })
  }

  return (
    <LiveContext.Provider value={{ artistNames, setArtistNames }}>
      <BulletinBoardPresenter submitHandler={fetchBulletins} />
    </LiveContext.Provider>
  )
}
