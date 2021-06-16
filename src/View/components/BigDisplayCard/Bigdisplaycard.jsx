import React, { Component } from 'react';
import "./Bigdisplaycard.css";

class BigDisplayCard extends Component {
    state = {
        longPressed: false,
        bigDataCard: this.props.bigDataCard
    }

    mystyle = {
    };

    onLinkHandler = () => {
        let url = this.state.bigDataCard.cards[0].cta[0].url;
        window.location.replace(url);
    }

    componentWillReceiveProps = (props) => {
        console.log(props.bigDataCard.cards[0].title);
        this.mystyle = {
            color: props.bigDataCard.cards[0].cta[0].text_color,
            backgroundColor: props.bigDataCard.cards[0].cta[0].bg_color

        }
        this.setState({
            ...this.state,
            bigDataCard: props.bigDataCard
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
                <div className={this.state.longPressed ? "big-display-card long-pressed" : "big-display-card"} onTouchStart={(e) => { this.start(e) }} onTouchEnd={(e) => { this.stop(e) }}>
                    <div className="big-display-card-img">
                        {this.state.bigDataCard.cards && <img src={this.state.bigDataCard.cards[0].bg_image.image_url} alt="" />}
                    </div>
                    {this.state.bigDataCard.cards && <h1>{this.state.bigDataCard.cards[0].title.substring(0, 16)} <br />
                        <span className="h1-color">{this.state.bigDataCard.cards[0].title.substring(17, 28)}</span></h1>}
                    {this.state.bigDataCard.cards && <p>{this.state.bigDataCard.cards[0].description.substring(0, 47)} <br />
                        <span className="h1-color">{this.state.bigDataCard.cards[0].description.substring(48, 75)}</span></p>}

                    {this.state.bigDataCard.cards &&
                        <button onTouchStart={() => this.onLinkHandler()} style={this.myStyle}>

                            {this.state.bigDataCard.cards[0].cta[0].text}

                        </button>
                    }

                </div>
            </div>
        );
    }
}

export default BigDisplayCard;