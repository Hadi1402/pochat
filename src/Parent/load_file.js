import React from 'react';
import "../static/css/chat.css";
import axios from 'axios';

class HandleFileUpload extends React.Component {

    constructor(props) {
        super(props)
        this.handle_file_upload = this.handle_file_upload.bind(this)
    }


    handle_file_upload(event) {
        const file1 = event.target.files[0];
        var file = {
            "name": file1.name,
            "size": file1.size,
            "type": file1.type,
            "url": URL.createObjectURL(file1)
        }
        if (file) {
            const type = file.name.split('.')
            let t = type[type.length - 1]
            var element
            var p = document.createElement("p");
            p.class = 'chat_message'
            if (["jpg", "png", "gif"].includes((t).toLowerCase())) {
                element = document.createElement("img");
                element.src = file.url;
            }
            else {
                if (["mp3", "webm"].includes((t).toLowerCase())) {
                    element = document.createElement("audio");
                    element.src = file.url;
                    element.controls = true
                }
                else {
                    element = document.createElement("img");
                    element.src = file.url;
                }
            }
        }
        console.log(element)
        p.appendChild(element)
        document.querySelector(".chat_body").appendChild(p);
    }
    render() {
        return (
            <div>

                <input type="file" onChange={this.handle_file_upload} />

            </div>

        )

    }
}


export default HandleFileUpload;