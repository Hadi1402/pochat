import React from 'react';
import "../static/css/chat.css";
import EmojiPicker from 'emoji-picker-react';
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon"



class Emoje extends React.Component {
  render() {
    console.log("this.props.input:", this.props.input)
    return (
        <div>
     <InsertEmoticonIcon onClick={this.props.handle_click} />
        <div style={{ "display": this.props.emoji_display }}>
          <EmojiPicker
            searchDisabled="true"
            previewConfig={{ showPreview: false }}
            emojiStyle="google"
            onEmojiClick={(e) => {
             this.props.input.current.value = this.props.input.current.value + e.emoji;
              console.log(e)
            }
            }
            height={300}
            width="100%"
          />
        </div>

        </div>
   

    )


}
}

export default Emoje;