import React from 'react'
import '../../styles/default/footer.css'

const hoge = process.env.REACT_APP_YOUTUBE_API_KEY

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>{hoge}</p>
      </div>
    );
  }
}

// export const Footer = () => (
    // <div className="footer">
    //     <p>{hoge}</p>
    // </div>
// );

// export Footer;