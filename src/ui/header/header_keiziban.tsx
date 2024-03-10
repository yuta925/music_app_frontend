import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { useNavigate } from 'react-router-dom'

export default function Header2() {
  const navigate = useNavigate()
  return (
    <Box
      zIndex={1100}
      sx={{
        //   '& button':{m: 1},
        color: '#333333',
        borderButtom: '2px solid white',
        position: 'fixed',
        top: 0,
        left: 0,
        padding: 0,
        marginBottom: 3,
        width: '100%',
        height: 90,
        borderRadius: 0,
        bgcolor: '#333333',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div style={{ marginRight: 'auto' }}>
        {/* ホーム戻るボタン */}
        <IconButton
          sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}
          onClick={() => navigate('/home')}
        >
          <KeyboardArrowLeftIcon sx={{ fontSize: 50 }} />
        </IconButton>
      </div>
      {/* 会場名引っ張ってくる */}
      <Typography
        variant="h5"
        sx={{ color: 'white', padding: 2, marginRight: 6 }}
      >
        ファイアートルネード
      </Typography>
    </Box>
  )
}
