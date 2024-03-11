import { FC } from 'react'
import Footer from '../../../ui/footer/footer'
import { Header } from '../../../ui/header/header'
import { ImageList, ImageListItem } from '@mui/material'
import { BulletinBoards } from './bulletinBoardContainer'
import { useNavigate } from 'react-router-dom'

type BulletinBoardCreateProps = {
  bulletinBoards: BulletinBoards[]
  enterBulletinBoard: () => Promise<void>
}

export const BulletinBoardPresenter: FC<BulletinBoardCreateProps> = ({
  bulletinBoards,
  enterBulletinBoard,
}) => {
  const navigate = useNavigate()
  return (
    <form onSubmit={enterBulletinBoard}>
      <div className="flex flex-col h-screen">
        <Header submitHandler={enterBulletinBoard} />
        <div className="-z-1 mt-[70px]">
          <ImageList gap={2}>
            {bulletinBoards.map((item) => (
              <ImageListItem key={item.BuiltinBoardId} className="mt-2 -z-0">
                <img
                  srcSet={`${item.ImageUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.ImageUrl}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.ArtistId}
                  loading="lazy"
                />
                <button
                  onClick={() => navigate(`/home/${item.BuiltinBoardId}`)}
                  className="bg-white text-black"
                >
                  {item.BuiltinBoardId}
                </button>
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <Footer />
      </div>
    </form>
  )
}
