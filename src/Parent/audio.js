import React from "react";
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

const AddAudioElement = () => {
  const recorderControls = useAudioRecorder()
  var p = document.createElement("p");
  p.class='chat_message'
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    p.appendChild(audio)
    document.querySelector(".chat_body").appendChild(p);
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