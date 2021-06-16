import React, { Component } from 'react';
import "./ImageCard.css";

class ImageCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="image-card">
                <img src="https://westeros-staging.s3.amazonaws.com/media/images/generic/5cb0d958af964354a728dd5c04537e1d.png" alt="" />
            </div>
         );
    }
}
 
export default ImageCard;