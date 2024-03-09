import { Box, IconButton } from '@mui/material'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
// import IconButton from "@mui/material/IconButton";

export default function Footer2() {
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
      {/* 録音機能つける */}
      <IconButton
        sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}
      >
        <KeyboardVoiceIcon sx={{ fontSize: 70 }} />
      </IconButton>
    </Box>
  )
}
