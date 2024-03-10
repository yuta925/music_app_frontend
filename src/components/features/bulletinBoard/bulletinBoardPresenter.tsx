import { FC } from 'react'
import Footer from '../../../ui/footer/footer'
import { Header } from '../../../ui/header/header'
import { ImageList, ImageListItem } from '@mui/material'
// import { BulletinBoards } from './bulletinBoardContainer'
import { useNavigate } from 'react-router-dom'

type BulletinBoardCreateProps = {
  // bulletinBoards: BulletinBoards[]
  enterBulletinBoard: () => Promise<void>
}

export const BulletinBoardPresenter: FC<BulletinBoardCreateProps> = ({
  // bulletinBoards,
  enterBulletinBoard,
}) => {
  const navigate = useNavigate()
  return (
    <form onSubmit={enterBulletinBoard}>
      <div className="flex flex-col h-screen">
        <Header submitHandler={enterBulletinBoard} />
        <div className="-z-1 mt-[70px]">
          <ImageList gap={2}>
            <ImageListItem key={2} className="mt-2 -z-0">
              <img
                srcSet="src/assets/images/superbeaver.png"
                src="src/assets/images/superbeaver.png"
                alt="大阪城ホール"
                loading="lazy"
              />
              <button
                onClick={() => navigate(`/home/1`)}
                className="bg-white text-black"
              >
                {'大阪城ホール'}
              </button>
            </ImageListItem>
          </ImageList>
        </div>
        <Footer />
      </div>
    </form>
  )
}
