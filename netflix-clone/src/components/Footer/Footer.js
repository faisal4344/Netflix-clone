import React from 'react';
//  import FacebookOutlined from '@mui/icons-material/FacebookOutlined'; // Import Facebook Icon
//  import InstagramOutlined from '@mui/icons-material/InstagramOutlined'; // Import Instagram Icon
//  import YouTubeOutlined from '@mui/icons-material/YouTubeOutlined'; // Import Youtube Icon
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
         <div className="footer_icons">
        
          {/* <FacebookOutlined />
          <InstagramOutlined />
          <YouTubeOutlined /> */}
        </div> 
                <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              {/* Removed extra closing tag */}
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="service-code">
          <p>Service Code</p>
        </div>
        <div className="copy-write">
          © 1997-2024 Netflix, Inc. (replaced non-breaking space)
        </div>
      </div>
       </div>
    
  );}
;

export default Footer;
