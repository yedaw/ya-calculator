import React from 'react';
import '../styles/master.scss';
import example from '../media/example2.jpg';



export const About = (props) => {
    return(
        <div className="main profile">
            <p>Works best when screenshot is cropped in on the stats, as below:</p>
            <img src={example} className='example-image' alt="An example screenshot of a YA player's attributes."></img>
            <p>If this tool has helped you please consider <a href='https://www.buymeacoffee.com/mattwade' rel='noopener noreferrer' target='_blank'>buying me a coffee</a> or <a href='https://www.paypal.com/donate/?hosted_button_id=8AP6UHXKUVZWA' rel='noopener noreferrer' target='_blank'>donating</a>.</p>
        </div>
    )
}