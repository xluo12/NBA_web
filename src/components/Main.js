import React, { Component } from 'react';
import { Profile } from './Profile';
import nba from 'nba';
// import { DataViewContainer } from '/DataViewContainer';


export default class Main extends Component {
    state = {
        playerID: 201939,
        playerInfo: {
            playerId: nba.findPlayer('Stephen Curry').playerId,
            teamAbbreviation: 'GSW',
        }
    }
    componentDidMount() {
        const player = nba.findPlayer('Stephen Curry');
        nba.stats.playerInfo({PlayerID: player.playerID}).then(({commonPlayerInfo, playerHeadlineStats}) => {
                const playerInfo = Object.assign({}, commonPlayerInfo[0], playerHeadlineStats[0]);
                this.setState({playerInfo});
            });
    }
    render() {
        return (
            <div className="main">
                <Profile playerInfo={this.state.playerInfo}/>
            </div>
        );
    }
}

