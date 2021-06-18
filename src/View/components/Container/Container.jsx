import React, { Component } from 'react'
import "./Container.css";
import BigDisplayCard from "../BigDisplayCard/Bigdisplaycard";
import SmallCardWithArrow from "../SmallCardWithArrow/SmallCardWithArrow";
import ImageCard from '../ImageCard/ImageCard';
import axios from "axios";


class Container extends Component {
    state = { 
        bigDataCard: [],
        smallCardWithArrow: []
     }

    componentDidMount = () => {
        axios.get("https://run.mocky.io/v3/04a04703-5557-4c84-a127-8c55335bb3b4").then( (obj) => {
            
            console.log(obj);
            this.setState({
                bigDataCard: obj.data.card_groups[6],
                smallCardWithArrow: obj.data.card_groups[0]
            })
        })
    }
    render() { 
        return ( 
            <div className="container">
                <BigDisplayCard bigDataCard = {this.state.bigDataCard} /> 
                <SmallCardWithArrow smallCardWithArrow = {this.state.smallCardWithArrow}/>
                <ImageCard />
            </div>
         );
    }
}
 
export default Container;