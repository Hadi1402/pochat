import React from 'react';
import "../static/css/chat.css";
import axios from 'axios';

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.filerRef = React.createRef();
    this.state = {
      newfile: [],
    }

    this.handleFileUpload = this.handleFileUpload.bind(this)
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

 
  render() {
    return (
      <div>
        
          <input type="file" onChange={this.handleFileUpload} />


        </div>


    )

  }
}


export default Chat;