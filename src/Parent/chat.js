import React from 'react';
import "../static/css/chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmojiPicker from 'emoji-picker-react';
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon"
import axios from 'axios';
import AddAudioElement from "./audio.js"
import Emoje from "./emoje.js"

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
    this.btn_send = React.createRef();
    this.filerRef = React.createRef();
    this.MicNone = React.createRef();
    // const  input_emoji =  this.inputRef.current.value
    this.state = {
      input: "",
      btn_send_display: "none",
      MicNone: "block",
      p_display: "none",
      msgs: [],
      select_emoj: '',
      emoji_display: "none",
      newfile: [],
      base64Audio: ''
    }
    this.sendMessage = this.sendMessage.bind(this)
    this.onChange = this.onChange.bind(this)
    // this.handleEmojeShow = this.handleEmojeShow.bind(this)
    this.handleFileUpload = this.handleFileUpload.bind(this)
    this.total_event = this.total_event.bind(this)

  }

  // handleEmojeShow = () => {
  //   if (this.state.emoji_display == "none")
  //     this.setState({ emoji_display: "block" })
  //   else
  //     this.setState({ emoji_display: "none" })
  // }

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
    this.setState({ btn_send_display: 'none' })
    this.setState({ MicNone: 'block' })
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

  handleFileUpload = (event) => {
    const file1 = event.target.files[0];
    var file = {
      "name": file1.name,
      "size": file1.size,
      "type": file1.type,
      "url": URL.createObjectURL(file1)
    }
    console.log("here")
    var messages = this.state.msgs
    if (file) {
      const type = file.name.split('.')
      let t = type[type.length - 1]
      if (["jpg", "png", "gif"].includes((t).toLowerCase())) {
        messages.push({ "msg": <img src={file.url} /> })
      }
      else {
        if (["mp3", "webm"].includes((t).toLowerCase())) {
          messages.push({ "msg": <audio controls src={file.url} /> })
        }
        else {
          messages.push({ "msg": <img src={file} /> })
        }
      }
    }
    this.setState({ "msgs": messages })
  }

  total_event() {
    console.log("")
    this.setState({ "emoji_display": "none" })
  }

  handleEmojeShow = () => {
    if (this.state.emoji_display == "none")
      this.setState({ emoji_display: "block" })
    else
      this.setState({ emoji_display: "none" })
  }
  render() {
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

        <div className='chat_body' onClick={this.total_event}>
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
            <div style={{ "display": this.state.MicNone }}>
              <AddAudioElement />

            </div>
            <input ref={this.inputRef}
              onChange={this.onChange}
              placeholder="پیام خود را تایپ کنید "
              type="text"
            />
          </form>
          {/* <InsertEmoticonIcon onClick={this.handleEmojeShow} />
          <div style={{ "display": this.state.emoji_display }}>
            <EmojiPicker
              searchDisabled="true"
              previewConfig={{ showPreview: false }}
              emojiStyle="google"
              onEmojiClick={(e) => {
                this.inputRef.current.value = this.inputRef.current.value + e.emoji;
                console.log(e)
                this.onChange();

              }
              }
              height={300}
              width="100%"
            />
          </div> */}
          <Emoje input={this.inputRef} emoji_display={this.state.emoji_display} handle_click={this.handleEmojeShow} />
          <input type="file" onChange={this.handleFileUpload} />


        </div>

      </div>

    )

  }
}


export default Chat;