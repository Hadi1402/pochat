import React from "react";
import ReactDOM from "react-dom/client";
import { AudioRecorder } from 'react-audio-voice-recorder';
import base64 from "react-native-base64";

function AddAudioElement() {
 // const url = URL.createObjectURL(blob);
  const audio = document.createElement("audio");
  audio.src = 'url';
  audio.controls = true;
 return(
  <React.StrictMode>
    <AudioRecorder 
      onRecordingComplete={AddAudioElement}
      audioTrackConstraints={{
        noiseSuppression: true,
        echoCancellation: true,
      }} 
      downloadOnSavePress={true}
      downloadonSaveUrl = {audio.src}
      downloadFileExtension="webm"
    />
  </React.StrictMode>

)

    }


export default AddAudioElement; 