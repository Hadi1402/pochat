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
      newfile: []
    }

    this.sendMessage = this.sendMessage.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleEmojeShow = this.handleEmojeShow.bind(this)
    //this.DropzoneFile = this.DropzoneFile.bind(this)
    this.handleFileUpload = this.handleFileUpload.bind(this)
    this.handleAduio = this.handleAduio.bind(this)

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
    var newfiles = this.state.newfile
    newfiles.push({
      content: '',
      file: {
        "name": file.name,
        "size": file.size,
        "type": file.type,
        "length": file.length,
        "url": URL.createObjectURL(file)
      }
    })
    var files = this.state.newfile
    this.setState({ "msgs": files });
    this.inputRef.current.value = file.name;
    this.setState({ 'newfile': newfiles });
    this.onChange()

    console.log(this.state.newfile);
    console.log(newfiles);
    // getExtension(file["name"]).toLowerCase()
    console.log(file.type);
  }

  handleAduio = (e) => {
    <audio src={foo} controls autoPlay />
    //  (async () => {
    // const play_yes = await foo.Sound.createAsync(
    //  require('../static/music/foo.mp3'),
    //               { shouldPlay: true }
    //                );
    //        })();


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
          this.state.msgs.push({"msg":<img src={file.url}/>})
           // this.setState({'msgs':msgs})
        }
        else {
          if (["mp3"].includes((t).toLowerCase())) {
            this.state.msgs.push({"msg":<audio controls src={file.url} />})
            //  this.setState({'newfile':newfile})
          }
        }
        else {
          this.state.msgs.push({"msg":<img src={file}/>})
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
          <form>

            <button ref={this.btn_send}
              onClick={this.sendMessage}
              style={{ "display": this.state.btn_send_display }}
              type="submit">  ارسال
            </button>
            <MicNone className='MicNone' style={{ "display": this.state.MicNone }} onClick={this.handleAduio} />
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
          {/*           
          <div ref={this.filerRef} >
            {this.state.newfile.map((newfiles, index) => (
              <div key={index}>
                {newfiles.file && (
                  <a href={newfiles[file.url]} target="_blank" rel="noopener noreferrer">
                    {newfiles[file.name]}
                  </a>
                )}
              </div>
            ))} 

          </div>*/}
          <input type="file" onChange={this.handleFileUpload} />

        </div>

      </div>

    )

  }
}


export default Chat;