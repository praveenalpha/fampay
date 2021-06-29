import React, { Component } from 'react'
import "./ContextCard.css";
class ContextCard extends Component {
    state = { 
        url: this.props.card.url,
        width: this.props.card.bg_image.aspect_ratio
     }
     onClickHandler = () => {
        window.location.replace(this.state.url);
     }
     my_style = {
         aspectRatio: 2/5
     }
    render() { 
        return ( 
            <div className="context_card_div" style = {this.my_style} onClick = { () => this.onClickHandler()}>
                {this.props.card && <img src={this.props.card.bg_image.image_url} alt="" /> }
            </div>
         );
    }
}
 
export default ContextCard;