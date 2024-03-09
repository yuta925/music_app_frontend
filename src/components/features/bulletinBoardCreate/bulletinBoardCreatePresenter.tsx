import { FC } from 'react'

type BulletinBoardCreateProps = {
  live_image: string
  live_Date: string
  live_venue: string
  artist_name: string
  setLiveImage: (value: string) => void
  setLiveDate: (value: string) => void
  setLiveVenue: (value: string) => void
  setArtistName: (value: string) => void
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export const BulletinBoardPresenter: FC<BulletinBoardCreateProps> = ({
  live_image,
  live_Date,
  live_venue,
  artist_name,
  setLiveImage,
  setLiveDate,
  setLiveVenue,
  setArtistName,
  submitHandler,
}) => {
  return <div>{/* これ消しといて */}</div>
}
