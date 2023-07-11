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
import { Select } from '@mui/material';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import file from "../static/img/file.jpg"
import { useDropzone } from 'react-dropzone';




class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
    this.btn_send = React.createRef();
    this.MicNone = React.createRef();
    this.state = {
      input: "",
      btn_send_display: "none",
      MicNone: "block",
      p_display: "none",
      msgs: [],
      select_emoj: '',
      emoji_display: "none",
      newfile: []
    }

    this.sendMessage = this.sendMessage.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleEmojeShow = this.handleEmojeShow.bind(this)
    //this.DropzoneFile = this.DropzoneFile.bind(this)
    this.handleFileUpload = this.handleFileUpload.bind(this)

  }

  handleEmojeShow = () => {
    if (this.state.emoji_display == "none")
      this.setState({ emoji_display: "block" })
    else
      this.setState({ emoji_display: "none" })


    /*{
     name: "flushed";
     unified: "1f633";
     order: 55;
     category: "people"
    }*/
  }

  sendMessage(e) {
    e.preventDefault();
    const time_system = new Date().toLocaleString()
    this.setState({ p_display: "block" })
    const inputt = this.inputRef.current.value;
    const br = document.createElement("br")
    var mass = document.getElementsByClassName('chat_body')[0];
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
    const newMessage = {
      content: '',
      file: {
        "name": file.name,
        "size": file.size,
        "type": file.type,
        "url": URL.createObjectURL(file)
      }
    };
    this.setState({ newfile: newMessage })
  }

  /*DropzoneFile(acceptedFiles) {
    // const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    // noClick: true,
    // noKeyboard: true

    const files = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
  }*/

  render() {
    // <Picker onSelect={(emoji) => this.setState({ select_emoj: emoji })} />

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
          <form>

            <button ref={this.btn_send}
              onClick={this.sendMessage}
              style={{ "display": this.state.btn_send_display }}
              type="submit">  ارسال
            </button>
            <MicNone className='MicNone' style={{ "display": this.state.MicNone }} />
            <input ref={this.inputRef}
              style={{ 'value': this.state.input }}
              onChange={this.onChange}
              placeholder="پیام خود را تایپ کنید "
              type="text" />
          </form>

          <InsertEmoticonIcon onClick={this.handleEmojeShow} />
          <div style={{ "display": this.state.emoji_display }}>
            <EmojiPicker
              searchDisabled="true"
              previewConfig={{ showPreview: false }}
              emojiStyle="google"
              onEmojiClick={(e) => console.log(e)}
              height={300}
              width="100%"
            />
          </div>
          
          {this.state.newfile.map((newfiles,index) => (
            <div key={index}>
              {newfiles.content}
              {newfiles[file] && (
                <a href={newfiles[file.url]} target="_blank" rel="noopener noreferrer">
                  {newfiles[file.name]}
                </a>
              )}
            </div>
          ))}
          <input type="file" onChange={this.handleFileUpload} />

        </div>

      </div>

    )

  }
}


export default Chat;