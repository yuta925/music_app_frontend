import  React from 'react';
import { Box,IconButton, Typography } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function Header2() {
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
            textAlign:'center',
          }}
        >
            <div style={{ marginRight: 'auto' }}>
                {/* ホーム戻るボタン */}
                <IconButton sx={{ color:'white', '&:hover': { color: 'secondary.main' }}} >
                 <KeyboardArrowLeftIcon sx={{ fontSize: 50}}/>
               </IconButton>
            </div>
            {/* 会場名引っ張ってくる */}
            <Typography variant="h5" sx={{ color: 'white' ,padding:2,marginRight:6}}>ファイアートルネード</Typography>
        </Box>
   
   );
 }