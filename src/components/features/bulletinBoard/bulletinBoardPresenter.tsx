import { FC } from 'react'

type BulletinBoardShowProps = {
  live_date: string
  artist_name: string
}

export const bulletinBoardPresenter: FC<BulletinBoardShowProps> = ({
  live_date,
  artist_name,
}) => {
  return <div>{/* ここに */}</div>
}
