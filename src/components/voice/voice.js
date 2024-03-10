import React, { useState, useEffect } from 'react';

function App() {
  const [stream, setStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isAudioSupported, setIsAudioSupported] = useState(true);

  useEffect(() => {
    const initializeMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: false,
          audio: true,
        });
        setStream(stream);
        if (!MediaRecorder.isTypeSupported('audio/webm')) {
          setIsAudioSupported(false);
          console.warn('audio/webm is not supported');
        }
      } catch (error) {
        console.error('Error accessing user media: ', error);
      }
    };

    initializeMedia();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleStartRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.start();
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
  };

  const handleDataAvailable = event => {
    const player = document.querySelector('#player');
    player.src = URL.createObjectURL(event.data);
  };

  useEffect(() => {
    if (stream) {
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm',
      });
      mediaRecorder.addEventListener('dataavailable', handleDataAvailable);
      setMediaRecorder(mediaRecorder);
    }
  }, [stream]);

  return (
    <div>
      <button id="buttonStart" onClick={handleStartRecording} disabled={!stream}>
        Start Recording
      </button>
      <button id="buttonStop" onClick={handleStopRecording} disabled={!stream}>
        Stop Recording
      </button>
      {isAudioSupported ? (
        <audio id="player" controls></audio>
      ) : (
        <p>Audio/webm is not supported</p>
      )}
    </div>
  );
}

export default App;
