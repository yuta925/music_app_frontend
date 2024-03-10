import { FC } from 'react'
import Footer from '../../../ui/footer/footer'
import { Header } from '../../../ui/header/header'
import { BulletinBoards } from './bulletinBoardContainer'
import { ImageList, ImageListItem } from '@mui/material'
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
                  srcSet={`${item.ImageUrl}?w=300&h=300&fit=crop&auto=format&dpr=2`}
                  src={`${item.ImageUrl}?w=300&h=300`}
                />
                <button
                  onClick={() => navigate(`/home/${item.BuiltinBoardId}`)}
                >
                  {item.ArtistId}
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
