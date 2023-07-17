import React from "react";
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
    </div>
  )
}

export default AddAudioElement; 