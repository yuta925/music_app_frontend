import { FC } from 'react'
import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import Footer from '../../../ui/footer/footer'
import Header from '../../../ui/header/header'
import { Button } from '@mui/material'
import { BulletinBoards } from './bulletinBoardContainer'
import { NestedModal } from '../../../ui/modal/modal'

type BulletinBoardCreateProps = {
  live_date: Date
  artistid: number
  locationid: number
  selectLiveDate: (selectDate: Date) => void
  selectArtist: (event: React.ChangeEvent<HTMLSelectElement>) => void
  selectLocation: (event: React.ChangeEvent<HTMLSelectElement>) => void
  bulletinBoards: BulletinBoards[]
  enterBulletinBoard: () => Promise<void>
}

export const BulletinBoardPresenter: FC<BulletinBoardCreateProps> = ({
  live_date,
  artistid,
  locationid,
  selectLiveDate,
  selectArtist,
  selectLocation,
  bulletinBoards,
  enterBulletinBoard,
}) => {
  return (
    <form onSubmit={enterBulletinBoard}>
      <div className="flex flex-col h-screen">
        <Header />
        <NestedModal
          live_date={live_date}
          artistid={artistid}
          locationid={locationid}
          selectLiveDate={selectLiveDate}
          selectArtist={selectArtist}
          selectLocation={selectLocation}
          submitHandler={enterBulletinBoard}
        />
        <ImageList>
          {bulletinBoards.map((item) => (
            <Button type="submit" key={item.live_venue_id}>
              <ImageListItem key={item.live_venue_id}>
                <img
                  src={`${item.live_image}?w=248&fit=crop&auto=format`}
                  // alt={item.live_venue_id}
                  loading="lazy"
                />
                <ImageListItemBar
                  // title={item.title}
                  // subtitle={<span>by: {item.author}</span>}
                  position="below"
                />
              </ImageListItem>
            </Button>
          ))}
        </ImageList>
        <Footer />
      </div>
    </form>
  )
}
