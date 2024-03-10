import { FC } from 'react'
import Footer from '../../../ui/footer/footer'
import { Header } from '../../../ui/header/header'
import { ImageList, ImageListItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
// import { BulletinBoards } from './bulletinBoardContainer'

type BulletinBoardCreateProps = {
  // bulletinBoards: BulletinBoards[]
  enterBulletinBoard: () => Promise<void>
}

export const BulletinBoardPresenterDemo: FC<BulletinBoardCreateProps> = ({
  // bulletinBoards,
  enterBulletinBoard,
}) => {
  const navigate = useNavigate()
  return (
    <form onSubmit={enterBulletinBoard}>
      <div className="flex flex-col h-screen">
        <Header submitHandler={enterBulletinBoard} />
        <div className="-z-1 mt-[70px]"></div>
        <ImageList gap={2}>
          {itemData.map((item) => (
            <ImageListItem key={item.id} className="mt-2 -z-0">
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <button
                onClick={() => navigate(`/home/${item.id}`)}
                className="bg-white text-black"
              >
                {item.title}
              </button>
            </ImageListItem>
          ))}
        </ImageList>
        <Footer />
      </div>
    </form>
  )
}

const itemData = [
  {
    img: 'src/assets/images/KingGnu_icon.png',
    title: '京セラドーム',
    id: 1,
  },
  {
    img: 'src/assets/images/Mrs.GreenApple.png',
    title: 'PayPayドーム',
    id: 2,
  },
  {
    img: 'src/assets/images/people1.png',
    title: 'KBS京都',
    id: 3,
  },
  {
    img: 'src/assets/images/fujirock.png',
    title: 'フジロック',
    id: 4,
  },
  {
    img: 'src/assets/images/summer_sonic.png',
    title: 'サマソニ',
    id: 5,
  },
]
