import React from "react";
// import ReactDOM from "react-dom/client";
// import { AudioRecorder } from 'react-audio-voice-recorder';
// import base64 from "react-native-base64";

// function AddAudioElement() {
//  // const url = URL.createObjectURL(blob);
//   const audio = document.createElement("audio");
//   audio.src = 'url';
//   audio.controls = true;
//  return(
//   <React.StrictMode>
//     <AudioRecorder 
//       onRecordingComplete={AddAudioElement}
//       audioTrackConstraints={{
//         noiseSuppression: true,
//         echoCancellation: true,
//         showVisualizer:true,
//       }} 
//       downloadOnSavePress={false}
//     />
//   </React.StrictMode>

// )

//     }

import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

const AddAudioElement = () => {
  const recorderControls = useAudioRecorder()
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.querySelector(".chat_body").appendChild(audio);
  };

  return (
    <div>
      <AudioRecorder 
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
      {/* <button onClick={recorderControls.stopRecording}>Stop recording</button> */}
    </div>
  )
}

export default AddAudioElement; 