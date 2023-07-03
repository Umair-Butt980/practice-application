import React from "react";

import './ChartBar.css'

//single ChartBar component
const ChartBar = (props) =>{
    let barFilled = '0%'
    if(barFilled > 0) {
        barFilled = Math.round((props.value / props.maxValue)*100)
    }
    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height:barFilled , backgroundColor:'red'}}> </div>
            </div> 
            <div className="chart-bar__label"> {props.label} </div>
        </div>
    )
}

export default ChartBar;