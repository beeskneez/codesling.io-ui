import React from "react";

export const FriendsList = (props) => {
  return (
    <div>
      <div><b>{props.user.username}</b>      KDR: {props.user.kdr}</div>
      <a onClick={() => props.deleteFriend(props.user)}>Remove</a>
    </div>
  );
};
