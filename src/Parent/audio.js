import React from "react";
import ReactDOM from "react-dom/client";
import { AudioRecorder } from 'react-audio-voice-recorder';

function AddAudioElement() {
   
 // const url = URL.createObjectURL(blob);
  const audio = document.createElement("audio");
 // audio.src = url;
//  audio.controls = true;
  document.body.appendChild(audio);
 return(
  <React.StrictMode>
    <AudioRecorder 
      onRecordingComplete={AddAudioElement}
      audioTrackConstraints={{
        noiseSuppression: true,
        echoCancellation: true,
      }} 
      downloadOnSavePress={true}
      downloadFileExtension="webm"
    />
  </React.StrictMode>


)
    }


export default AddAudioElement; 