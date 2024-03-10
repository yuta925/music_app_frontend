import { useReactMediaRecorder } from 'react-media-recorder'

const Voicetest = () => {
  const { status, startRecording, stopRecording } = useReactMediaRecorder({
    audio: true,
  })

  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      {/* <video src={mediaBlobUrl} controls autoPlay loop /> */}
    </div>
  )
}

export default Voicetest
