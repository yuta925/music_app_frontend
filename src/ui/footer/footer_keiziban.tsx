import { Box, Button } from '@mui/material'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
import { useState } from 'react'
// import { useReactMediaRecorder } from 'react-media-recorder'

const Footer2 = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleButtonClick = () => {
    setIsClicked(!isClicked)
  }

  // const onSaveAudio = async (formData: FormData) => {
  //   try {
  //     const response = await fetch('/message', {
  //       method: 'POST',
  //       body: formData,
  //     })

  //     if (response.ok) {
  //       console.log('File uploaded successfully')
  //     } else {
  //       console.error('Failed to upload file')
  //     }
  //   } catch (error) {
  //     console.error('Error uploading file:', error)
  //   }
  // }

  // const { startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder(
  //   { audio: true }
  // )

  // const handleSaveAudio = async () => {
  //   if (mediaBlobUrl) {
  //     const audioBlob = await fetch(mediaBlobUrl).then((r) => r.blob())
  //     const audioFile = new File([audioBlob], 'voice.wav', {
  //       type: 'audio/wav',
  //     })
  //     const formData = new FormData()
  //     formData.append('file', audioFile)

  //     onSaveAudio(formData) // 一つ目のプログラムで定義されている関数
  //   } else {
  //     console.error('mediaBlobUrl is null')
  //   }
  // }

  return (
    <Box
      sx={{
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
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {isClicked ? (
        <Button
          onClick={() => {
            handleButtonClick()
            stopRecording()
            handleSaveAudio()
          }}
          sx={{
            backgroundColor: 'white',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            marginTop: '20px',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'red',
              borderRadius: '20%',
              width: '30px',
              height: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '5px',
              zIndex: 2,
            }}
          />
        </Button>
      ) : (
        <Button
          onClick={() => {
            handleButtonClick()
            startRecording()
          }}
          sx={{
            backgroundColor: 'white',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            marginTop: '20px',
          }}
        >
          <KeyboardVoiceIcon sx={{ fontSize: '300%' }} />
        </Button>
      )}
    </Box>
  )
}

export default Footer2
