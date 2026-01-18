import React from "react";
import "./UserItem.css";

interface UserItemProps {
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <div className="user-item">
      <div className="user-avatar">
        {user.firstName[0]}
        {user.lastName[0]}
      </div>

      <div className="user-info">
        <div className="user-name">
          {user.firstName} {user.lastName}
        </div>
        <div className="user-email">{user.email}</div>
      </div>
    </div>
  );
};

export default React.memo(UserItem);
