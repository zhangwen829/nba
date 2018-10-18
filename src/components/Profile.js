import React from 'react';

export default class Main extends React.Component {

  render() {
    console.log(this.props.playerInfo);
    const {
      playerId,
      playerName,
      teamCity,
      teamName,
      teamAbbreviation,
      height,
      weight,
      pts,
      reb,
      ast,
      pie,
    } = this.props.playerInfo;

    return (
      <div className="profile">
        <div className="profile-entry player-name">{`${playerName}`}</div>
        <div className="profile-entry">
          <div className="profile-entry-left">Team</div>
          <div className="profile-entry-right">{`${teamCity} ${teamName}`}</div>
        </div>
      </div>
    );
  }
} 