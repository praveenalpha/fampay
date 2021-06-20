import React, { Component } from 'react'
import "./Container.css";
import BigDisplayCard from "../BigDisplayCard/Bigdisplaycard";
import SmallCardWithArrow from "../SmallCardWithArrow/SmallCardWithArrow";
import ImageCard from '../ImageCard/ImageCard';
import ContextCard from "../ContextCard/ContextCard";
import SmallDisplayCard from "../SmallDisplayCard/SmallDisplayCard";
import axios from "axios";


class Container extends Component {
    state = { 
        bigDataCard: [],
        smallCardWithArrow: [],
        image_card1: undefined,
        image_card2: undefined,
        context_card: undefined,
        smallDisplayCard1: undefined,
        smallDisplayCard2: undefined,
        
     }

    componentDidMount = () => {
        axios.get("https://run.mocky.io/v3/04a04703-5557-4c84-a127-8c55335bb3b4").then( (obj) => {
            let image_card1 = obj.data.card_groups[4];
            let image_card2 = obj.data.card_groups[5];
            
            console.log(obj);
            this.setState({
                bigDataCard: obj.data.card_groups[6],
                smallCardWithArrow: obj.data.card_groups[0],
                image_card1: image_card1,
                image_card2: image_card2,
                context_card: obj.data.card_groups[1].cards,
                smallDisplayCard1: obj.data.card_groups[2],
                smallDisplayCard2: obj.data.card_groups[3],
                

            })
        })
    }
    render() { 
        return ( 
            <div className="container">
                <BigDisplayCard bigDataCard = {this.state.bigDataCard} /> 
                <SmallCardWithArrow smallCardWithArrow = {this.state.smallCardWithArrow}/>
                {this.state.image_card1 && this.state.image_card1.is_scrollable && this.state.image_card1.cards.map( card => {
                    return(
                        <ImageCard key={card.name} card = {card}/>
                    )
                })}
                {this.state.image_card2 && this.state.image_card2.is_scrollable && this.state.image_card2.cards.map( card => {
                    return(
                        <ImageCard key={card.name} card = {card}/>
                    )
                })}
                <div className="context_card">
                    { this.state.context_card && this.state.context_card.map(card => {
                        return(
                            <ContextCard card={card} key = {card.name}/>
                        )

                    })
                    }
                </div>
                {this.state.smallDisplayCard1 && this.state.smallDisplayCard1.is_scrollable && this.state.smallDisplayCard1.cards.map(card => {
                    return(
                        <SmallDisplayCard card = {card}/>
                    )
                })}
                {this.state.smallDisplayCard2 && this.state.smallDisplayCard2.is_scrollable && this.state.smallDisplayCard2.cards.map(card => {
                    return(
                        <SmallDisplayCard card = {card} />
                    )
                })}
                
            </div>
         );
    }
}
 
export default Container;