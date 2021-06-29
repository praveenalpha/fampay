import React, { Component } from 'react'
import "./SmallDisplayCard.css";

class SmallDisplayCard extends Component {
    state = { 
        url : this.props.card.url
     }

    bg_style = {
        backgroundColor: this.props.card.bg_color
    }

    onClickHandler = () => {
        window.location.replace(this.state.url);
    }
    render() { 
        return ( 
            <div className="small-display-card" onClick = {() => {this.onClickHandler()}} style={this.bg_style}>
                <img src={this.props.card.icon.image_url} alt="" />
                <h3>{this.props.card.formatted_title.text}</h3>
            </div>
         );
    }
}
 
export default SmallDisplayCard;