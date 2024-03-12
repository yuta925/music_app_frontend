import { FC } from 'react'
import Footer from '../../../ui/footer/footer'
import { Header } from '../../../ui/header/header'
import { ImageList, ImageListItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { LiveContext } from './bulletinBoardContainer'

type BulletinProps = {
  submitHandler: () => Promise<void>
}

export const BulletinBoardPresenter: FC<BulletinProps> = ({
  submitHandler,
}) => {
  const navigate = useNavigate()

  const { artistNames } = useContext(LiveContext)

  return (
    <div className="flex flex-col h-screen">
      <Header submitHandler={submitHandler} />
      <div className="-z-1 mt-[70px]">
        <ImageList gap={2}>
          {artistNames.map((item) => (
            <ImageListItem key={item.BuiltinBoardId} className="mt-2 -z-0">
              <img
                srcSet={`${item.ImageUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.ImageUrl}?w=164&h=164&fit=crop&auto=format`}
                alt={item.BuiltinBoardId}
                loading="lazy"
              />
              <button
                onClick={() => navigate(`/home/${item.BuiltinBoardId}`)}
                className="bg-white text-black"
              >
                {item.artistName}
              </button>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <Footer />
    </div>
  )
}
