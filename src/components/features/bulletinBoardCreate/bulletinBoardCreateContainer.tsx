import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BulletinBoardCreatePresenter } from './bulletinBoardCreatePresenter'
import { DateContext } from '../../../ui/select/dateSelect'
import { ArtistContext } from '../../../ui/select/artistSelect'
import { LocationContext } from '../../../ui/select/locationSelect'
import { ImgUpContext } from '../../../ui/imgUp/imgUp'

export type BulletinCreate = {
  live_image: string
  live_date: string
  locationid: string
  artistid: string
}

export const BulletinBoardCreateContainer = () => {
  const navigate = useNavigate()

  const { live_image, setLiveImage } = useContext(ImgUpContext)
  const { live_date, setLiveDate, selectedDate, setSelectedDate } =
    useContext(DateContext)
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
      <DateContext.Provider
        value={{ live_date, setLiveDate, selectedDate, setSelectedDate }}
      >
        <LocationContext.Provider value={{ locationid, selectLocationId }}>
          <ArtistContext.Provider value={{ artistid, selectArtistId }}>
            <BulletinBoardCreatePresenter submitHandler={submitHandler} />
          </ArtistContext.Provider>
        </LocationContext.Provider>
      </DateContext.Provider>
    </ImgUpContext.Provider>
  )
}
