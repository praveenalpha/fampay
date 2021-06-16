import React, { Component } from 'react'
import "./Container.css";
import BigDisplayCard from "../BigDisplayCard/Bigdisplaycard";
import SmallCardWithArrow from "../SmallCardWithArrow/SmallCardWithArrow";
import ImageCard from '../ImageCard/ImageCard';
import axios from "axios";


class Container extends Component {
    state = { 
        bigDataCard: {},

     }

    componentDidMount = () => {
        axios.get("http://www.mocky.io/v2/5ed79368320000a0cc27498b").then( (obj) => {
            let bigDataCard = obj.data[0];
            console.log(obj.data[0]);
            this.setState({
                bigDataCard: bigDataCard
            })
        })
    }
    render() { 
        return ( 
            <div className="container">
                <BigDisplayCard bigDataCard = {this.state.bigDataCard} /> 
                <SmallCardWithArrow />
                <ImageCard />
            </div>
         );
    }
}
 
export default Container;