import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BulletinBoardCreatePresenter } from './bulletinBoardCreatePresenter'
import { CreateContext } from '../../../pages/create'

export type BulletinCreate = {
  live_image: string
  live_date: string
  locationid: string
  artistid: string
}

export const BulletinBoardCreateContainer = () => {
  const navigate = useNavigate()
  const { live_image, live_date, locationid, artistid } =
    useContext(CreateContext)
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

  return <BulletinBoardCreatePresenter submitHandler={submitHandler} />
}
