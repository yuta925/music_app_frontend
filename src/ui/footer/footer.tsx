import { Box, IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EditNoteIcon from '@mui/icons-material/EditNote'
// import IconButton from "@mui/material/IconButton";

export default function Footer() {
  return (
    <Box
      position="fixed"
      sx={{
        //   '& button':{m: 1},
        borderTop: '2px solid white',
        bottom: 0,
        left: 0,
        padding: 0,
        margin: 0,
        width: '100%',
        height: 110,
        borderRadius: 0,
        bgcolor: 'primary.main',
        '&:hover': {
          bgcolor: 'primary.dark',
        },
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <IconButton
        sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}
      >
        <EditNoteIcon sx={{ fontSize: 70 }} />
      </IconButton>
      <IconButton
        sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}
      >
        <HomeIcon sx={{ fontSize: 70 }} />
      </IconButton>
      <IconButton
        sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}
      >
        <AccountCircleIcon sx={{ fontSize: 70 }} />
      </IconButton>
    </Box>
  )
}
