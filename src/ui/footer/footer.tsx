import { Box, IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EditNoteIcon from '@mui/icons-material/EditNote'

export default function Footer() {
  return (
    <Box
      sx={{
        position: 'fixed',
        borderTop: '2px solid white',
        bottom: 0,
        left: 0,
        padding: 0,
        margin: 0,
        width: '100%',
        height: 68, // 「推奨値」らしい
        backgroundColor: '#333333',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >

      <IconButton
        sx={{
          color: '#FFFFFF',
          '&:hover': {
            color: '#EA4335'
          }
        }}
      >
        <EditNoteIcon sx={{
          fontSize: 70
        }} />
      </IconButton>
      <IconButton
        sx={{
          color: '#FFFFFF',
          '&:hover': {
            color: '#EA4335'
          }
        }}
      >
        <HomeIcon sx={{
          fontSize: 70
        }} />
      </IconButton>
      <IconButton
        sx={{
          color: '#FFFFFF',
          '&:hover': {
            color: '#EA4335'
          }
        }}
      >
        <AccountCircleIcon sx={{
          fontSize: 70
        }} />
      </IconButton>
    </Box>
  )
}