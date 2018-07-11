import React, { Component } from 'react';
import { Profile } from './Profile';
import nba from 'nba';
import { DataViewContainer } from './DataViewContainer'

export default class Main extends Component {
    state = {
        playerInfo: {
            playerId: nba.findPlayer('Stephen Curry').playerId,
            teamAbbreviation: 'GSW',
        }
    }
    componentDidMount() {
        nba.stats.playerInfo({ PlayerID: nba.findPlayer('Stephen Curry').playerId }).then((info) => {
            console.log(info);
            const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            console.log(playerInfo);
            this.setState({ playerInfo });
        });
    }
    render() {
        return (
            <div className="main">
                <Profile playerInfo={this.state.playerInfo}/>
                <DataViewContainer />
            </div>
        );
    }
}

