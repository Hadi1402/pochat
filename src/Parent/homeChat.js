import img1 from "../static/img/img1.jpg"
//import "../static/css/chatbox.css"
import React from "react";
import { connect } from "react-redux";
import dispalyBox from "../Actions/displayChatbox";
import SupportDashbord from "./support_dashbord";

class HomeChat extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this)
    // this.click1 = this.click1.bind(this)
  }

  click()
   {
    console.log("cccccc0", this.props.display)
    //this.display = this.display.dispalyBox
    this.props.dispatch(dispalyBox(this.props.display))
    // <ChatBox />

  }

  render() {
    var chat = undefined
    if (this.props.display == "none") {
      chat = <SupportDashbord> </SupportDashbord>
    }
    return (
      <div>
        <img className="homeimg" src={img1} onClick={this.click} style={{ display: this.props.display }} />
        {chat}
      </div>
    )
  }

}



function mapDispatchToProps(state) {
  console.log(state.display, "gjhjkgtg")
  return { display: state.display }
}


export default connect(mapDispatchToProps)(HomeChat);


