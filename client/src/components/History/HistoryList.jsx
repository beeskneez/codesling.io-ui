import React from 'react';

export const HistoryList = ({ history }) => {
  let outcome;
  return (
    <div>
      {history.map((hist, index) => {
        outcome = hist.outcome === 0 ? 'Loss' : 'Win';
        return (
          <div key={index}>
            <div>{outcome}</div>
            <div>Opponent: {hist.user.rows[0].username}</div>
            <div>Clout Earned: {hist.clout}</div>
            <br />
          </div>
        )})}
    </div>
  )
};
