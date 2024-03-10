import { Box, Typography } from '@mui/material'
import { FC } from 'react'

export const Header2: FC = () => {
  return (
    <div className="fixed">
      <Box
        sx={{
          position: 'fixed',
          borderBottom: '2px solid white',
          top: 0,
          left: 0,
          padding: 0,
          margin: 0,
          width: '100%',
          height: 68,
          borderRadius: 0,
          bgcolor: '#333333',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        {/* ここはへんこうする！！！ */}
        <Typography variant="h5" sx={{ color: 'white', padding: 2 }}>
          ファイアートルネード
        </Typography>
        <div style={{ marginLeft: 'auto' }}>
          {/* <IconButton sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }} >
            <LogoutIcon sx={{ fontSize: 50 }} />
          </IconButton> */}
        </div>
      </Box>
    </div>
  )
}
