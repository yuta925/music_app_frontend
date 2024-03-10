import { Box, IconButton } from '@mui/material'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
// import IconButton from "@mui/material/IconButton";

export default function Footer2() {
  return (
    <Box
      sx={{
        //   '& button':{m: 1},
        backgroundColor: '#333333',
        borderTop: '2px solid white',
        position: 'fixed',
        bottom: 0,
        left: 0,
        padding: 0,
        marginTop: 10,
        width: '100%',
        height: 110,
        borderRadius: 0,
        bgcolor: '#333333',
        // '&:hover': {
        //   bgcolor: 'primary.dark',
        // },
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center',
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
