import { Box, IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EditNoteIcon from '@mui/icons-material/EditNote'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  return (
    <div className="z-10 bottom-0 ">
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
              color: '#EA4335',
            },
          }}
          onClick={() => navigate('/create')}
        >
          <EditNoteIcon
            sx={{
              fontSize: 70,
            }}
          />
        </IconButton>
        <IconButton
          sx={{
            color: '#FFFFFF',
            '&:hover': {
              color: '#EA4335',
            },
          }}
          onClick={() => navigate('/home')}
        >
          <HomeIcon
            sx={{
              fontSize: 70,
            }}
          />
        </IconButton>
        <IconButton
          sx={{
            color: '#FFFFFF',
            '&:hover': {
              color: '#EA4335',
            },
          }}
          onClick={() => navigate('/profile')}
        >
          <AccountCircleIcon
            sx={{
              fontSize: 70,
            }}
          />
        </IconButton>
      </Box>
    </div>
  )
}
