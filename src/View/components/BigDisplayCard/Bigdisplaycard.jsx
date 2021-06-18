import React, { Component } from 'react';
import "./Bigdisplaycard.css";

class BigDisplayCard extends Component {
    state = {
        longPressed: false,
        bigDataCard: undefined,
        url : undefined,
        titleTextOne : "",
        titleTextTwo : ""
        
    }


    bg_style = {
        
    };

    btn_style = {

    }

    title_one_style = {

    };

    title_two_style = {

    };

    
    onLinkHandler = () => {
        window.location.replace(this.state.url);
    }

    componentWillReceiveProps = (props) => {
        console.log(props.bigDataCard.cards[0].title);
        this.bg_style = {
            backgroundColor: props.bigDataCard.cards[0].bg_color 
        }
        this.btn_style = {
            backgroundColor: props.bigDataCard.cards[0].cta[0].bg_color ,
            color: props.bigDataCard.cards[0].cta[0].text_color ,
            
        }
        this.title_one_style = {
            color: props.bigDataCard.cards[0].formatted_title.entities[0].color
        }
        this.title_two_style = {
            color: props.bigDataCard.cards[0].formatted_title.entities[1].color
        }
        
        this.setState({
            ...this.state,
            bigDataCard: props.bigDataCard,
            url: props.bigDataCard.cards[0].cta[0].url,
            titleTextOne: props.bigDataCard.cards[0].formatted_title.entities[0].text,
            titleTextTwo: props.bigDataCard.cards[0].formatted_title.entities[1].text
            
        })
    }

    setTimeOutID = undefined;

    start = (e) => {
        e.preventDefault();
        console.log("start")
        this.setTimeOutID = setTimeout(() => {
            this.setState({
                ...this.state,
                longPressed: true
            })
        }, 1000);
    }

    stop = (e) => {
        console.log("stop")
        e.preventDefault();
        clearTimeout(this.setTimeOutID);
    }

    render() {
        return (
            <div className="big-display-card-container" >
                <div className="big-display-card-icon">
                    <div className="big-display-card-icon-one">
                        <i class="fa fa-bell" aria-hidden="true"></i>
                        <h5>Remind me later</h5>
                    </div>
                    <div className="big-display-card-icon-one">
                        <i class="fa fa-times-circle" aria-hidden="true"></i>
                        <h5>Dissmiss Now</h5>
                    </div>

                </div>
                <div style = {this.bg_style} className={this.state.longPressed ? "big-display-card long-pressed" : "big-display-card"} onTouchStart={(e) => { this.start(e) }} onTouchEnd={(e) => { this.stop(e) }}>
                    <div className="big-display-card-img">
                        {this.state.bigDataCard && <img src={this.state.bigDataCard.cards[0].bg_image.image_url} alt="" />}
                    </div>
                    {this.state.bigDataCard && <h1>{this.state.bigDataCard.cards[0].title.substring(0, 5)} 
                        <span style={this.title_one_style}>{this.state.titleTextOne}</span>
                        {this.state.bigDataCard.cards[0].title.substring(12, 19)} 
                        <span style={this.title_two_style}>{this.state.titleTextTwo}</span>
                        </h1>}
                    {this.state.bigDataCard && <p>{this.state.bigDataCard.cards[0].description.substring(0, 47)} <br />
                        <span className="h1-color">{this.state.bigDataCard.cards[0].description.substring(48, 75)}</span></p>}

                    {this.state.bigDataCard &&
                        <button onTouchStart={() => this.onLinkHandler()} style={this.btn_style}>

                            {this.state.bigDataCard.cards[0].cta[0].text}

                        </button>
                    }

                </div>
            </div>
        );
    }
}

export default BigDisplayCard;