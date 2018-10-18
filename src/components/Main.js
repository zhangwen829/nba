import React from 'react';
import nba from 'nba';
import Profile from './Profile'

window.nba = nba;

export default class Main extends React.Component {
  state = {
    playerInfo: {
      playerId: 201939,
    }
  }

  componentDidMount() {
    const { playerId } = nba.findPlayer('Stephen Curry');
    nba.stats.playerInfo({ PlayerID: playerId }).then(
      (info) => {
        const playerInfo = { ...info.commonPlayerInfo[0], ...info.playerHeadlineStats[0] };
        this.setState({
          playerInfo
        })
      }
    );
  }

  render() {
    return (
      <div className="main">
        <Profile />
        <div>ShotChart</div>
      </div>
    );
  }
} 