import React from 'react';

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
    <div style={{ padding: '12px', border: '1px solid #ccc', marginBottom: '8px', borderRadius: '8px', background: '#1b9ed2' }}>
      <div><strong>{user.firstName} {user.lastName}</strong></div>
      <div>{user.email}</div>
    </div>
  );
};

export default React.memo(UserItem);
