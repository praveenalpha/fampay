import React, { Component } from 'react'
import "./SmallCardWithArrow.css";

class SmallCardWithArrow extends Component {
    state = { 
        smallCardWithArrow: undefined,
        url: undefined
     }
     text_style = {

     };
     description_style = {

     };

     onclickHandler = () => {
        window.location.replace(this.state.url);
     }
     componentWillReceiveProps = (props) => {
         this.text_style = {
             color: props.smallCardWithArrow.cards[0].formatted_title.entities[0].color
         }
         this.description_style = {
             color: props.smallCardWithArrow.cards[0].formatted_description.entities[0].color
         }
        this.setState({
            smallCardWithArrow: props.smallCardWithArrow,
            url: props.smallCardWithArrow.cards[0].url,
        })
     }
    render() { 
        let text = this.state.smallCardWithArrow === undefined ? "" : this.state.smallCardWithArrow.cards[0].formatted_title.text;
        let text2 = this.state.smallCardWithArrow === undefined ? "" : this.state.smallCardWithArrow.cards[0].formatted_title.entities[0].text;
        let description = this.state.smallCardWithArrow === undefined ? "" : this.state.smallCardWithArrow.cards[0].formatted_description.text;
        let descriptionText = this.state.smallCardWithArrow === undefined ? "" : this.state.smallCardWithArrow.cards[0].formatted_description.entities[0].text;
        return ( 
            <div className="small-card-with-arrow" onClick = {() => {this.onclickHandler()}}>
                {this.state.smallCardWithArrow && <img src={this.state.smallCardWithArrow.cards[0].icon.image_url} alt="" />}
                <div className="small-card-with-arrow-text">
                    <h2>{text.substring(0, 11)}<span style={this.text_style}>{text2}</span></h2>
                    <p>{description.substring(0, 23)}<span style={this.description_style}>{descriptionText}</span></p>

                </div>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
         );
    }
}
 
export default SmallCardWithArrow;