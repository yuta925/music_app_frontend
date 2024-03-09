import { FC } from 'react'
import DatePicker from 'react-datepicker'
import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import Footer from '../../../ui/footer/footer'
import Header from '../../../ui/header/header'
import { Button } from '@mui/material'
import { artistOptions } from '../../../assets/Options/artistOptions'
import { BulletinBoards } from './bulletinBoardContainer'

type BulletinBoardCreateProps = {
  live_date: Date
  artist_id: number
  selectLiveDate: (selectDate: Date) => void
  selectArtist: (event: React.ChangeEvent<HTMLSelectElement>) => void
  bulletinBoards: BulletinBoards[]
  enterBulletinBoard: () => void
}

export const BulletinBoardPresenter: FC<BulletinBoardCreateProps> = ({
  live_date,
  artist_id,
  live_venue_id,
  selectLiveDate,
  selectArtist,
  bulletinBoards,
  enterBulletinBoard,
}) => {
  return (
    <form onSubmit={enterBulletinBoard}>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="text-center <div mt-8 mb-8 text-2xl flex justify-center items-center">
          <DatePicker
            selected={live_date}
            onChange={selectLiveDate}
            dateFormat="yyyy/MM/dd"
          />
        </div>
        <div className="mt-8 mb-8 text-2xl flex justify-center items-center">
          <select value={artist_id} onChange={selectArtist}>
            <option value="">アーティスト</option>
            {artistOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.Name}
              </option>
            ))}
          </select>
        </div>
        <ImageList>
          {bulletinBoards.map((item) => (
            <Button type="submit">
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

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//     author: '@bkristastucchio',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//     author: '@rollelflex_graphy726',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//     author: '@helloimnik',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//     author: '@nolanissac',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//     author: '@hjrc33',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     author: '@arwinneil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//     author: '@tjdragotta',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//     author: '@katie_wasserman',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     author: '@silverdalex',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//     author: '@shelleypauls',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//     author: '@peterlaster',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     author: '@southside_customs',
//   },
// ];
