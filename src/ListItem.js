import React, { Component } from 'react';
import './ListItem.css';

export default class ListItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div className="listWrapper">
         <span>{this.props.serialNum +". "}</span>{this.props.content.title}
        </div>
        )
    }
}