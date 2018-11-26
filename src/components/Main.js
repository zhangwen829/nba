import React from 'react';
import nba from 'nba';
import Profile from './Profile'
import DataViewContainer from './DataViewContainer';
import SearchBar from './SearchBar';

window.nba = nba;

export default class Main extends React.Component {
  state = {
    playerInfo: {
      playerId: 201939,
      playerName: 'Stephen Curry'
    }
  }

  componentDidMount() {
    this.loadPlayerInfo(this.state.playerInfo.playerName);
  }

  loadPlayerInfo = (playerName) => {
    const playerId = nba.findPlayer(playerName).playerId;

    nba.stats.playerInfo({ PlayerID: playerId }).then(
      (info) => {
        const playerInfo = { ...info.commonPlayerInfo[0], ...info.playerHeadlineStats[0] };
        console.log(playerInfo);
        this.setState({
          playerInfo
        });
      }
    );

  }


  render() {
    return (
      <div className="main">
        <SearchBar loadPlayerInfo={this.loadPlayerInfo} />
        <div className="player">
          <Profile playerInfo={this.state.playerInfo} />
          <DataViewContainer playerId={this.state.playerInfo.playerId} />
        </div>
      </div>
    );
  }
} 