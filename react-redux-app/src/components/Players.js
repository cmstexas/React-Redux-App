import React from 'react';
// import {useSelector} from "react-redux";
import '../App.css';


const Players = props => {
    // const test = useSelector(state => state.test)
    return (
    <div clasName = "playercard">
        <h2>{props.players.first_name} {props.players.last_name}</h2>
        <h4>{props.players.position}</h4>
        <h4>{props.players.height_feet}</h4>
        <h4>{props.players.weight_pounds}</h4>
        <h6>CONFRERENCE</h6>
        <h4>{props.players.team.conference}</h4>
        <h4>{props.players.team.full_name}</h4>
        {/* <img src={props.players.url} alt={props.players.name} /> */}
    </div>
    );
};

export default Players;