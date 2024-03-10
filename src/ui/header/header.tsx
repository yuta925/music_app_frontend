import { Box, Typography } from '@mui/material'
import { NestedModal, type NestedModalProps } from '../modal/modal'
import { FC } from 'react'

export const Header: FC<NestedModalProps> = ({ submitHandler }) => {
  return (
    <div className="z-10 bg-slate-900">
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
        <Typography variant="h5" sx={{ color: 'white', padding: 3 }}>
          ファイアートルネード
        </Typography>
        <NestedModal submitHandler={submitHandler} />
        <div style={{ marginLeft: 'auto' }}>
          {/* <IconButton sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }} >
            <LogoutIcon sx={{ fontSize: 50 }} />
          </IconButton> */}
        </div>
      </Box>
    </div>
  )
}
