import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../../App.tsx'
import '../../index.css'
import MusicPlayerSlider from './coment.tsx'
import Footer2 from '../footer/footer_keiziban.tsx'
import Header2 from '../header/header_keiziban.tsx'
import { Box } from '@mui/system'

export default function Comentarea(){
  return(
  <React.StrictMode>
    <Header2 />
    <Box width={'100%'} sx={{my:12}}>
      <MusicPlayerSlider />
      <MusicPlayerSlider />
      <MusicPlayerSlider />
      <MusicPlayerSlider />
      <MusicPlayerSlider />
      <MusicPlayerSlider />
      <MusicPlayerSlider />
      <MusicPlayerSlider />
      <MusicPlayerSlider />
      <MusicPlayerSlider />
      <MusicPlayerSlider />
      <MusicPlayerSlider />
      <MusicPlayerSlider />
      {/* <MusicPlayerSlider />
      <MusicPlayerSlider />
      <MusicPlayerSlider /> */}
    </Box>
    <Footer2 />
  </React.StrictMode>
  );
    }