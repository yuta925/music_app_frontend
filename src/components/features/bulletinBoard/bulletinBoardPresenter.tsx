import Header from "../../../ui/header/header";
import Footer from "../../../ui/footer/footer";
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import { Button } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { FC } from "react";

type BulletinBoardShowProps = {
  live_date: string
  artist_name: string
}


const BulletinBoardPresenter: FC<BulletinBoardShowProps> = ({
  live_date,
  artist_name,
}) => {
  return (
    <>
      <Header />
      <div className="h-screen w-screen flex justify-center items-center">
        <ImageList sx={{ width: 400, height: 700 }}>
          {itemData.map((item) => (
            <Button>
              <ImageListItem key={item.img}>
                <div className="aspect-square">
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>
                <ImageListItemBar
                  title={item.title}
                  subtitle={<span><ChatBubbleOutlineIcon />{item.author}</span>} // コメント数を表示させる
                  position="below"
                />
              </ImageListItem>
            </Button>
          ))}
        </ImageList>
      </div>
      <Footer />
    </>
  )
}

export default BulletinBoardPresenter

// 掲示板のデータが格納されているリスト
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', // 画像
    title: 'Breakfast', // 会場名
    author: '99', // コメント数
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '99',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '88',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '70',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '66',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '52',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '52',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '49',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '25',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '14',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '8',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: ' 3',
  },
]