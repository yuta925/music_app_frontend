import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BulletinBoardCreatePresenter } from './bulletinBoardCreatePresenter'
import { DateContext } from '../../../ui/Select/dateSelect'
import { ArtistContext } from '../../../ui/Select/aristSelect'
import { LocationContext } from '../../../ui/Select/locationSelect'
import { ImgUpContext } from '../../../ui/imgUp/imgUp'

export type BulletinCreate = {
  live_image: string
  live_date: Date
  locationid: number
  artistid: number
}

export const BulletinBoardCreateContainer = () => {
  const navigate = useNavigate()

  const { live_image, setLiveImage } = useContext(ImgUpContext)
  const { live_date, setLiveDate } = useContext(DateContext)
  const { artistid, selectArtistId } = useContext(ArtistContext)
  const { locationid, selectLocationId } = useContext(LocationContext)

  const createBulletin = useMutation({
    mutationFn: async (bulletin: BulletinCreate) =>
      await axios.post(
        `${import.meta.env.VITE_APP_API}/bulletin-board`,
        bulletin
      ),
    onSuccess() {
      {
        navigate('/home')
      }
    },
  })

  const submitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    await createBulletin.mutateAsync({
      live_image: live_image,
      live_date: live_date,
      locationid: locationid,
      artistid: artistid,
    })
  }

  return (
    <ImgUpContext.Provider value={{ live_image, setLiveImage }}>
      <DateContext.Provider value={{ live_date, setLiveDate }}>
        <LocationContext.Provider value={{ locationid, selectLocationId }}>
          <ArtistContext.Provider value={{ artistid, selectArtistId }}>
            <BulletinBoardCreatePresenter submitHandler={submitHandler} />
          </ArtistContext.Provider>
        </LocationContext.Provider>
      </DateContext.Provider>
    </ImgUpContext.Provider>
  )
}
