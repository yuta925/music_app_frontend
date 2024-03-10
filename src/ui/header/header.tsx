import { Box,IconButton, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Header() {
    return (
        <Box
          position="fixed"
          sx={{
          //   '& button':{m: 1},
            borderButtom:'2px solid white',
            top: 0,
            left:0,
            padding:0,
            margin:0,
            width:'100%',
            height: 90,
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
            {/* ここはへんこうする！！！ */}
            <Typography variant="h5" sx={{ color: 'white' ,padding:2}}>ファイアートルネード</Typography>
            <div style={{ marginLeft: 'auto' }}>
                <IconButton sx={{ color:'white', '&:hover': { color: 'secondary.main' }}} >
                 <LogoutIcon sx={{ fontSize: 50}}/>
               </IconButton>
            </div>
        </Box> 
   
   );
 }