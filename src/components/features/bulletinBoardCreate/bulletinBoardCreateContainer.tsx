import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { BasicSelect } from '../../../ui/select/selectbox'
import { SelectLocation } from '../../../ui/selectlocation'

export type BulletinCreate = {
  live_image: string
  live_date: Date
  live_venue_id: number
  artist_name_id: number
}

export const BulletinBoardCreateContainer = () => {
  const [live_image, setLiveImage] = useState('')
  const live_date = Date2()
  const live_venue_id = SelectLocation()
  const artist_id = BasicSelect()

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const fileObject = e.target.files[0]
    // オブジェクトURLを生成し、useState()を更新
    setLiveImage(window.URL.createObjectURL(fileObject))
  }

  // selectボタンからid取得
  // バックにartistのidとlocationのidを送る
  const createBulletin = useMutation({
    mutationFn: async (bulletin: BulletinCreate) =>
      await axios.post(
        `${import.meta.env.VITE_APP_API}/bulletin-board`,
        bulletin
      ),
    onSuccess() {
      {
        /* アラートを出す関数を呼び出す */
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
      live_venue_id: live_venue_id,
      artist_id: artist_id,
    })
  }
  return (
    <BulletinBoardCreatePresenter
      submitHandler={submitHandler}
      onFileInputChange={onFileInputChange}
    />
  )
}
