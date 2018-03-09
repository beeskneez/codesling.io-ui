import React from "react";

export const FriendsList = ({ friends }) => {
  return (
    <div>
      <h1>herro</h1>
      {friends.map(user => {
        <div>{user.friend_id}</div>
      })}
    </div>
  );
};

// {
//   friends.map(friend => {
//     <div>Hello</div>;
//   });
// }
