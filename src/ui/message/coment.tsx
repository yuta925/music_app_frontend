import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import PauseRounded from '@mui/icons-material/PauseRounded'
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded'
import CurrentDate from '../getdate'
import FireButton from '../firebutton/firebutton'
import Header from '../header/header'
import Footer from '../footer/footer'

const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 40,
  width: 343,
  maxWidth: '100%',
  margin: 'auto',
  marginBottom:10,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.7)',
  backdropFilter: 'blur(40px)',
}))

const CoverImage = styled('div')({
  width: 80,
  height: 80,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 50,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
  },
})

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
})

export default function MusicPlayerSlider() {
  const theme = useTheme()
  const duration = 200 // seconds
  const [position, setPosition] = React.useState(32)
  const [paused, setPaused] = React.useState(false)
  function formatDuration(value: number) {
    const minute = Math.floor(value / 60)
    const secondLeft = value - minute * 60
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`
  }
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000'
  return (
    // <div className="flex flex-col h-screen ">
    //   <Header />
    //   <div className="flex-grow">

          <Widget className="bg-slate-00">
            <Box sx={{ display: 'flex-center', alignItems: 'center' }}>

              {/* アイコンのデータほしい */}
              <CoverImage>
                <img alt="" src="/static/images/sliders/chilling-sunday.jpg" />
              </CoverImage>

              <Box
                sx={{ ml: 1.5, minWidth: 0, marginLeft: 0.5, marginRight: 2 }}
              >

                {/* ユーザー名ほしい */}
                <Typography noWrap sx={{ fontSize: 20 }}>
                  名前ごうえんじ
                </Typography>

                {/* 投稿した日付と時間 */}
                <Typography
                  noWrap
                  letterSpacing={-0.25}
                  sx={{ fontSize: 15, marginTop: 1 }}
                >
                  {CurrentDate()}
                </Typography>

              </Box>

              {/* もしいいねの数数えるならココ */}
              <FireButton />

            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center', // 親要素を右寄りに配置するスタイル
                width: '90%',
                height: 60,
                margin: 'auto',
                marginTop: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                borderRadius: 30,
              }}
            >

              {/* 再生と停止ボタン */}
              <IconButton
                sx={{ marginLeft: 1, marginRight: 0 }}
                aria-label={paused ? 'play' : 'pause'}
                onClick={() => setPaused(!paused)}
              >
                {paused ? (
                  <PlayArrowRounded
                    sx={{ fontSize: '3rem' }}
                    htmlColor={mainIconColor}
                  />
                ) : (
                  <PauseRounded
                    sx={{ fontSize: '3rem' }}
                    htmlColor={mainIconColor}
                  />
                )}
              </IconButton>


              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: -2,
                }}
              >

                {/* 再生した秒数 */}
                <TinyText sx={{ marginTop: 2, fontSize: 16 }}>
                  {formatDuration(position)}
                </TinyText>

                {/* 残りの秒数 */}
                <TinyText sx={{ marginTop: 2, fontSize: 16 }}>
                  /{formatDuration(duration - position)}
                </TinyText>

              </Box>
              
              {/* 音声再生バー （秒数とバーは連動してる）*/}
              <Slider
                aria-label="time-indicator"
                size="small"
                value={position}
                min={0}
                step={1}
                max={duration}
                onChange={(_, value) => setPosition(value as number)}
                sx={{
                  color:
                    theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                  height: 12,
                  width: '35%',
                  marginLeft: 3,
                  '& .MuiSlider-thumb': {
                    width: 20,
                    height: 20,
                    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                    '&::before': {
                      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                    },
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: `0px 0px 0px 8px ${
                        theme.palette.mode === 'dark'
                          ? 'rgb(255 255 255 / 16%)'
                          : 'rgb(0 0 0 / 16%)'
                      }`,
                    },
                    '&.Mui-active': {
                      width: 20,
                      height: 20,
                    },
                  },
                  '& .MuiSlider-rail': {
                    opacity: 0.28,
                  },
                }}
              />

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mt: -1,
                }}
              ></Box>
            </Box>
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1, px: 1 }}
              alignItems="center"
            ></Stack>
          </Widget>
          // </Box>
      //   {/* </Box>
      // </div>
      // <div className="flex-grow">
      //   <Footer />
      // </div> */}
      
    // </div>
  )
}
