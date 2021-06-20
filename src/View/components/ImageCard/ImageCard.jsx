import React, { Component } from 'react';
import "./ImageCard.css";

class ImageCard extends Component {
    state = { 
        url: this.props.card.url
     }
     
     onClickHandler = () => {
        window.location.replace(this.state.url);
     }
    render() { 
        return ( 
            <div className="image-card" onTouchStart = {() => {this.onClickHandler()}}>
                {this.props.card && <img src={this.props.card.bg_image.image_url} alt="" />}
            </div>
         );
    }
}
 
export default ImageCard;