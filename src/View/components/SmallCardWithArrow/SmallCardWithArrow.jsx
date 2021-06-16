import React, { Component } from 'react'
import "./SmallCardWithArrow.css";

class SmallCardWithArrow extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="small-card-with-arrow">
                <i class="fa fa-user" aria-hidden="true"></i>
                <h2>Small card with arrow</h2>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
         );
    }
}
 
export default SmallCardWithArrow;