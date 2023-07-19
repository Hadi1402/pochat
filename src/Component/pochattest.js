import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    this.setState({ scrollTop: window.scrollY });
  }

  render() {
    return (
      <div>
        <div
          style={{
            position: 'fixed',
            padding: '10px 0',
            top: '0',
            backgroundColor: 'white',
            borderBottom: '1px solid #c0c0c0',
            width: '100%',
          }}
        >
          Scroll top: <b>{this.state.scrollTop}</b>
        </div>
        <div style={{ marginTop: '50px' }}>
          {[...Array(30)].map((_, i) => (
            <p key={i}>Content</p>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;