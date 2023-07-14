import React from 'react';
import ReactDOM from 'react-dom';
import "../static/css/chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { InsertEmoticon } from '@material-ui/icons';
import { MicNone } from '@material-ui/icons';
import Picker from 'emoji-picker-react';
import EmojiPicker from 'emoji-picker-react';
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon"
import axios from 'axios';
import file from "../static/img/file.jpg"
import foo from "../static/music/foo.mp3"
//import AddAudioElement from "./audio.js"
import VoiceMessageSender from './audio.js'


class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
    this.btn_send = React.createRef();
    this.filerRef = React.createRef();
    this.MicNone = React.createRef();
    this.state = {
      input: "",
      btn_send_display: "none",
      MicNone: "block",
      p_display: "none",
      msgs: [],
      select_emoj: '',
      emoji_display: "none",
      newfile: [],
      audio: []
    }
    this.sendMessage = this.sendMessage.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleEmojeShow = this.handleEmojeShow.bind(this)
    this.handleFileUpload = this.handleFileUpload.bind(this)
    this.handelAudio = this.handelAudio.bind(this)
  }

  handleEmojeShow = () => {
    if (this.state.emoji_display == "none")
      this.setState({ emoji_display: "block" })
    else
      this.setState({ emoji_display: "none" })
  }

  sendMessage(e) {
    e.preventDefault();
    const time_system = new Date().toLocaleString()
    this.setState({ p_display: "block" })
    const inputt = this.inputRef.current.value;
    var messages = this.state.msgs
    messages.push(
      {
        "msg": inputt,
        "time": time_system,
        "type": "output",
      }
    )
    this.setState({ "msgs": messages })
    this.inputRef.current.value = '';
  }

  onChange(e) {
    console.log("inja")
    const inputt = this.inputRef.current.value;
    const btn_send = this.btn_send.current;
    const MicNone = this.MicNone.current;
    console.log(inputt, btn_send)
    if (inputt != "") {
      this.setState({ btn_send_display: 'block' })
      this.setState({ MicNone: 'none' })
    }
    else {
      this.setState({ btn_send_display: 'none' })
      this.setState({ MicNone: 'block' })
    }
  }
  /* sendEmoji(e) {
     this.setState({ select_emoj: e.target.value })
     console.log(this.state.select_emoj)
   }*/

  handleFileUpload = (event) => {
    const file = event.target.files[0];
    var newfiles = this.state.newfile
    newfiles.push({
      file: {
        "name": file.name,
        "size": file.size,
        "type": file.type,
        "url": URL.createObjectURL(file)
      }
    })
    this.setState({ 'newfile': newfiles });
    var files = this.state.newfile
    this.setState({ "msgs": files });
    this.inputRef.current.value = file.name;
    this.onChange()
    // console.log(this.state.newfile);
    // console.log(newfiles);
    // console.log(file.type);
  }
handelAudio = (event) =>{
  const voice = event.target.file[0]
  const audio = document.createElement("audio");
  document.body.appendChild(audio);
  var newaudio = this.state.audio
 // audio.src = url;
  audio.controls = true;
   newaudio.push({
    voice:{
    "url": URL.createObjectURL(voice),
    "name":voice.name,
    "type":voice.type
    }
   })
 this.setState({"audio":newaudio})  
 var voices =this.state.audio
 this.setState({'msgs':voices})
 this.inputRef.current.value = voice.name;
 this.onChange()
 console.log(this.state.audio)

}


  render() {
    var newfiles = this.state.newfile
    var ms = this.state.msgs
    for (var i = 0; i < newfiles.length; i++) {
      //let filetype= file.type
      var file = newfiles[i].file
      if (file) {
        const type = file.name.split('.')
        let t = type[type.length - 1]
        if (["jpg", "png", "gif"].includes((t).toLowerCase())) {
          this.state.msgs.push({ "msg": <img src={file.url} /> })
        }
        else {
          if (["mp3", "webm"].includes((t).toLowerCase())) {
            this.state.msgs.push({ "msg": <audio controls src={file.url} /> })
          }
          else {
            this.state.msgs.push({ "msg": <img src={file} /> })
          }
        }
      }
    }
    return (
      <div className='chat'>
        <div className='chat_header'>
          <Avatar />
          <div className='chat_headerInfo'>
            <h3> user name ... </h3>
            <p> last visit .... </p>
          </div>

          <div className='chat_headerRight'>
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>

        <div className='chat_body'>
          {this.state.msgs.map(q => (
            <p className='chat_message' style={{ "display": this.state.p_display }}> <span>{q.msg}</span>
              <span className='time'> {q.time} </span>
            </p>
          ))}
        </div>

        <div className='chat_footer'>
          {this.state.audio}
          <form>
            <button ref={this.btn_send}
              onClick={this.sendMessage}
              style={{ "display": this.state.btn_send_display }}
              type="submit">  ارسال
            </button>
           <MicNone className='MicNone' style={{ "display": this.state.MicNone }} onclick={this.handelAudio} />
            {/* <button onClick={<AddAudioElement/>}>  </button> */}
             <div style={{ "display": this.state.MicNone }}>
              <VoiceMessageSender/>
               {/* <AddAudioElement> */}
              {/* {this.inputRef.current.value = AddAudioElement.url} */}
             {/* </AddAudioElement> */}
             {/* <button onclick={this.handelAudio}></button> */}
             </div>
            <input ref={this.inputRef}
              onChange={this.onChange}
              placeholder="پیام خود را تایپ کنید "
              type="text"
            />
          </form>
          <InsertEmoticonIcon onClick={this.handleEmojeShow} />
          <div style={{ "display": this.state.emoji_display }}>
            <EmojiPicker
              searchDisabled="true"
              previewConfig={{ showPreview: false }}
              emojiStyle="google"
              onEmojiClick={(e) =>
                this.setState({ "msgs": e })
              }
              height={300}
              width="100%"
            />
          </div>
          <input type="file" onChange={this.handleFileUpload} />

        </div>

      </div>

    )

  }
}


export default Chat;