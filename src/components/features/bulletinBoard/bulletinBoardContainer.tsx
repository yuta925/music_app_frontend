import BasicDatePicker from '../../../ui/date/date'
import { useState } from 'react'
import { BulletinBoardPresenter } from '../bulletinBoardCreate/bulletinBoardPresenter'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

type BulletinsShow = {
  live_date: string
  artist_name: string
}

export const BulletinBoardContainer = () => {
  const [live_date, setLiveDate] = useState('')
  const [artist_name, setArtistName] = useState('')

  const bulletinShow = useMutation({
    mutationFn: async (bulletin: BulletinsShow) =>
      await axios.post(
        `${
          import.meta.env.VITE_APP_API
        }/bulletin-board/${live_date}/${artist_name}`,
        bulletin
      ),
  })

  return <BulletinBoardPresenter artist_ />
}
